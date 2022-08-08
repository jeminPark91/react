import React from 'react';
import {
    ListItem, 
    ListItemText, 
    InputBase, 
    Checkbox,
    ListItemSecondaryAction,
    IconButton
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {item : props.item};
        this.delete = props.delete;
    }

    deleteEventHandler = () => {
        this.delete(this.state.item);
    }

    render(){
        const item = this.state.item;

        return (
            <ListItem>
                <Checkbox checked={item.done}/>
                <ListItemText>
                    <InputBase
                        inputProps={{ "aria-label" : "naked"}}
                        type="text"
                        id={item.id}
                        name={item.name}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
                </ListItemText>

                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete Todo"
                    onClick={this.deleteEventHandler}>
                        <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            

            // <div classNAme = "Todo">
            //     <input type="checkbox" 
            //     id={this.state.item.id} 
            //     name={this.state.item.name} 
            //     checked={this.state.item.done} />
            //     <label id={this.state.item.id}>{this.state.item.title}</label>
            // </div>
        );
    }
}
export default Todo;