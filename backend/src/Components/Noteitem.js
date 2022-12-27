import React,{useContext} from 'react';
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
    const context=useContext(noteContext);
    const {deleteNote}=context;
     const { note,updateNote,mode } = props;
    return (
        <div className='col-md-3'  >
            <div className="card my-3" style={{backgroundColor:props.mode==='dark'?'#193e30':'white',color:props.mode==='dark'?'white':'black'}}>
                <div className="card-body"  >
                <div className='d-flex align-items-center' >
                    <h5 className="card-title" > {note.title}</h5>
                    <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateNote(note) }} ></i>
                    <i className="fa-regular fa-trash-can mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted successfully", "success");}}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
