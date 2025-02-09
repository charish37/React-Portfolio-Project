import React, { useRef, useState,useEffect } from "react";
import { useSelector } from "react-redux";
import {getStorage, uploadBytesResumable,ref, getDownloadURL} from 'firebase/storage';
import { app } from "../firebase";

export default function Profile() {
  const fileRef = useRef(null);
  const [file,setFile] = useState(undefined);
  const [filePerc,setFilePerc] = useState(0);
  const [formData,setFormData] = useState(null);
  const [fileUploadError,setFileUploadError] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  console.log(formData)

  useEffect(() => {
    if(file){
      handleFileUpload(file)
    }
  },[file])

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name
    const storgaeRef = ref(storage,fileName);
    const uploadTask = uploadBytesResumable(storgaeRef,file);

    uploadTask.on('state_changed', (snapshot) =>{
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setFilePerc(Math.round(progress));
    },
    (error) => {
      setFileUploadError(error)
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => setFormData({...formData,avatar: downloadURL}) )
    })

  }

   // firebase storage
      // allow read;
      // allow write: if
      // request.resource.size < 2 * 1024 * 1024 && 
      // request.resource.contentType.matches('image/.*')

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        {/* accept image will make it to accept only images and by using ref we are adding file choosen feat to img */}
        <input onChange={(e) => setFile(e.target.files[0])} type="file" ref={fileRef} hidden accept="image/*"/>
        <img
          src={formData?.avatar || currentUser.avatar}
          onClick={() => fileRef.current.click()}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />
        <p className="text-center">{fileUploadError ? <span className="text-red-700">Error image upload (size less than 2mb)</span> : filePerc > 0 && filePerc < 100 ? (<span className="text-slate-700">Uploading {filePerc}%</span>) : filePerc == 100 && (<span className="text-green-700">Image uploaded successfully!!!</span>)}</p>
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border-amber-50 p-3 bg-white rounded-lg text-gray-800"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          className="border-amber-50 p-3 bg-white rounded-lg text-gray-800"
        />
        <input
          type="text"
          placeholder="password"
          id="password"
          className="border-amber-50 p-3 bg-white rounded-lg text-gray-800"
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
          update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
}
