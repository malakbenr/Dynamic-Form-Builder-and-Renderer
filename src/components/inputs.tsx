import React from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';


const Inputs = (props: {type: string, color?: string}) => {

    function handleOnDrag(e: any) {
    e.dataTransfer.setData("idComponent", e.target.id);
    }

  return (
    <div id={props.type} className="flex flex-col space-y-1.5" draggable onDragStart={e => handleOnDrag(e)}>
        <Label htmlFor={props.type} className={props.color}>{props.type} </Label>
        <Input id={props.type}  type={props.type}  />
    </div>
  )
}

export default Inputs;