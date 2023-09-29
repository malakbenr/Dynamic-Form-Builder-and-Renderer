import React from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';

const FileI = (props: {type: string, color?: string}) => {

    function handleOnDrag(e: any) {
        e.dataTransfer.setData("idComponent", e.target.id);
    }

  return (
        <div id={props.type} className="flex flex-col space-y-1.5" draggable onDragStart={e => handleOnDrag(e)}>
            <Label htmlFor="file" className={props.color}>File</Label>
            <Input id="file" type="file" placeholder="Type your email here.." />
        </div> 
  )
}

export default FileI;