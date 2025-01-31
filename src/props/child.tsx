interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
}

// by using interface we will tell typescript that it receives props of type Childprops

// but the traditional function method was not recognised by a typescript as a React Component.
export const Child = ({color, onClick,children} : ChildProps) => {
  return <div>{color}
  <button onClick={onClick}>Click Button</button>
  {children}
  </div>
}

// so there is another approach to tell typescript that func is a react comp so it can work with react props like propTypes,displayName, defaultProps , contextTypes
// child will receive props of type 'Child Props'
export const ChildAsFC: React.FC<ChildProps> = ({color,onClick,children}) => {
    return <div>{color}
    <button onClick={onClick}>Click Button</button>
    {children}
    </div>
}

