import React, { useState } from 'react';
import './App.css';
import  Inputs from './components/inputs';
import  CalendarI from './components/calendarI';
import  TextOptions from './components/textOptions';
import  FileI from './components/fileI';
import { Label } from './components/ui/label';
import { Button } from './components/ui/button';
import { RadioGroup } from "./components/ui/radio-group";
import { Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle, } from './components/ui/card';


function App() {

  //set Colors
  const [color, setColor] = useState<string>();


  //Drag and drop functionality
  const [formInputs, setFormInputs] = useState<string[]>([]);
  const [data, setData] = useState<any[]>([])

  
  function handleOnDrop(e: any) {
    const inputType = e.dataTransfer.getData("idComponent");
    e.target.appendChild(document.getElementById(inputType));
    setFormInputs([...formInputs, inputType]); 
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  //Save Form
  const saveForm = async (e: any) => {
    e.preventDefault();
    setData([...data, formInputs]);   
  }
 
  return (
    <>
    <div className="grid grid-flow-col h-auto place-items-center py-11">
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Drag & Drop a Form component.</CardTitle>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
            <Inputs type='text' color={color} />
            <Inputs type='number' color={color}/>
            <Inputs type='email' color={color} />
            <TextOptions type='text-options' color={color} />
            <FileI type='file' color={color}/>     
          </div>
      </CardContent>
    </Card> 
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create or update your Form here.</CardTitle>
      </CardHeader>
      <form onSubmit={saveForm}>
        <CardContent onDrop={e => handleOnDrop(e)} onDragOver={e => handleDragOver(e)}>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Save</Button>
        </CardFooter>
      </form>
    </Card>   
    <Card className="w-[350px] text-re">
      <CardHeader>
        <CardTitle>Apply some Styles.</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup>
          <div className="flex items-center space-x-2">
            <input name='colorM' type='radio' value="text-gray-950" id="r1" onChange={e => setColor(e.target.value)} defaultChecked/>
            <Label htmlFor="r1">Black</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input name='colorM' type='radio' value="text-sky-600" id="r2" onChange={e => setColor(e.target.value)} />
            <Label htmlFor="r2">Blue</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input name='colorM' type='radio' value="text-red-700" id="r3" onChange={e => setColor(e.target.value)}/>
            <Label htmlFor="r3">Red</Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>   
    </div>
    <div className="flex flex-row justify-center m-9">
        <h1 className="text-3xl font-extrabold">Created Forms</h1>
    </div>
    <div className="grid grid-flow-col place-items-center mb-9">
      {data.map((item, index) => (
        <Card className="w-[350px] p-3" key={index}>
        <CardContent>    
          <div className="grid w-full items-center gap-4">
            {item.map((ele: string, index: number) => (
              ele === 'text-options'? <TextOptions type={ele} color={color}/>
              : ele === 'calendar'? <CalendarI type={ele} color={color}/>
              : ele === 'file'? <FileI type={ele} color={color}/>
              :
              <Inputs key={index} type={ele} color={color}/>             
            ))}      
          </div>      
        </CardContent>
      </Card>  
      ))}
    </div>
    </>
  );
}

export default App;
