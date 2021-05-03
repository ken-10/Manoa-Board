import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import {database} from "../firebase";
import './gallery.css';
import {Modal, Button} from 'react-bootstrap'


export class GalleryModal extends React.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
  }  
  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown(e) {
    if (e.keyCode === 27)
      this.props.closeModal();
    if (e.keyCode === 37 && this.props.hasPrev)
      this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext)
      this.props.findNext();
  }

  render () {
    const { closeModal, hasNext, hasPrev, findNext, findPrev, post } = this.props;
    if (!post) {
      console.log('modal is closed')
      return null;
    }
    return (
      <div>
        <div className="modal-overlay" onClick={closeModal}></div>
        <div isOpen={!!post} className="post-modal">
          <div className='post-modal-body'>
            <a href="#" className='modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
            {hasPrev && <a href="#" className='modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
            {hasNext && <a href="#" className='modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
            <img src={post.image} />
          </div>
        </div>
      </div>
    )
  }
}


const Gallery = (props) => {
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    console.log(currentIndex)
  }, [currentIndex])

  const renderImageContent = (post, index) => {
    return (
      <div  onClick={(e) => openModal(e, index)}>
        <img src={post.image} key={post.postKey} alt=""/>
      </div>
    ) 
  }
  const openModal = (e, index) => {
    setCurrentIndex(index);
    // console.log(currentIndex)
  }
  const closeModal = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    setCurrentIndex(null)
  }
  const findPrev = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    setCurrentIndex(currentIndex - 1);
  }
  const findNext = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {props.data.map(renderImageContent)}
      </div>
      <GalleryModal 
        closeModal={closeModal} 
        findPrev={findPrev} 
        findNext={findNext} 
        hasPrev={currentIndex > 0} 
        hasNext={currentIndex + 1 < props.data.length} 
        post={props.data[currentIndex]} 
      />
    </div>
  );
}

export default Gallery;
