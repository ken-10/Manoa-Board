import React, { useState } from "react";
import { render } from "react-dom";
import {database} from "../firebase";
import './gallery.css';
import {Modal, Button} from 'react-bootstrap'


export class GalleryModal extends React.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = { show: this.props.show };
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
  handleClose(e) {
    this.setState({show: false});
    this.props.closeModal();
  }

  render () {
    const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
    if (!src) {
      console.log('whut')
      return null;
    }
    return (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

const imgUrls = ['https://source.unsplash.com/PC_lbSSxCZE/800x600','https://source.unsplash.com/lVmR1YaBGG4/800x600','https://source.unsplash.com/5KvPQc1Uklk/800x600','https://source.unsplash.com/GtYFwFrFbMA/800x600','https://source.unsplash.com/Igct8iZucFI/800x600','https://source.unsplash.com/M01DfkOqz7I/800x600','https://source.unsplash.com/MoI_cHNcSK8/800x600','https://source.unsplash.com/M0WbGFRTXqU/800x600','https://source.unsplash.com/s48nn4NtlZ4/800x600','https://source.unsplash.com/E4944K_4SvI/800x600','https://source.unsplash.com/F5Dxy9i8bxc/800x600','https://source.unsplash.com/iPum7Ket2jo/800x600'
];
const Gallery = (props) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const renderImageContent = (post, index) => {
    return (
      <div  onClick={(e) => openModal(e, index)}>
        <img src={post.image} key={0} alt=""/>
      </div>
    ) 
  }
  const openModal = (e, index) => {
    setCurrentIndex(index);
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
    setCurrentIndex(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
  }
  const findNext = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    setCurrentIndex(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {props.data.map(renderImageContent)}
      </div>
      {/* <GalleryModal 
        closeModal={closeModal} 
        findPrev={findPrev} 
        findNext={findNext} 
        hasPrev={currentIndex > 0} 
        hasNext={currentIndex + 1 < imgUrls.length} 
        src={props.data[currentIndex]} 
      /> */}
    </div>
  );
}

export default Gallery;
