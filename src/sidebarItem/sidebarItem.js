import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';
import { removeHTMLTags } from '../helpers';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class SidebarItemComponent extends Component {
  constructor() {
    super();
    this.handleSelectNote = this.handleSelectNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
  }

  handleSelectNote = (note, index) => this.props.selectNote(note, index);

  handleDeleteNote() {
    if(window.confirm(`Are you sure you want to delete: ${this.props._note.title}`)) {
      this.props.deleteNote(this.props._note)
    }  
  }

  render() {

    const { classes, _note, _index, selectedNoteIndex } = this.props;

    return (
      <div key={_index}>
        <ListItem
          className={classes.listItem}
          selected={ selectedNoteIndex === _index }
          alignItems='flex-start'>
          <div 
            className={classes.textSection}
            onClick={() => this.handleSelectNote(_note, _index)}>
              <ListItemText
                primary={_note.title}
                secondary={removeHTMLTags(_note.body.substring(0, 30)) + '...'} />
          </div>
          <Button onClick={this.handleDeleteNote}
            className={classes.deleteIcon}>Delete</Button>
        </ListItem>
      </div>
    );
  }

}

export default withStyles(styles)(SidebarItemComponent);