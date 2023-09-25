import React, { useEffect, useRef, useState } from 'react';
import './Gallery.css';
import ImageGallery from 'react-image-gallery';
import isMobile from "../utils/isMobile";

const _images = [
    {
        original: require('../assets/images/YWPhotos/1.JPG'),
    },
    {
        original: require('../assets/images/YWPhotos/2.JPG'),
    },
    {
        original: require('../assets/images/YWPhotos/3.JPG'),
    },
    {
        original: require('../assets/images/YWPhotos/4.JPG'),
    },
    {
        original: require('../assets/images/YWPhotos/5.JPG'),
    },
    {
        original: require('../assets/images/YWPhotos/6.JPG'),
    },
    {
        original: require('../assets/images/YWPhotos/7.JPG'),
    },
    {
        original: require('../assets/images/YWPhotos/8.JPG'),
    },
    {
        original: require('../assets/images/YWPhotos/9.JPG'),
    },
    {
        original: require('../assets/images/YWPhotos/10.JPG'),
    },
    {
        original: require('../assets/images/YWPhotos/11.JPG'),
    } 
];

const Gallery = () => {
    const [images, setImages] = useState(_images);
    const [index, setIndex] = useState(1);
    const [cnt, setCnt] = useState(0);
      
    useEffect(() => {
        if(cnt < 1) setCnt(prev => ++prev);
        else if(cnt < 2) setImageSize();
    }, [cnt])

    function setImageSize() {
        const ratio = 1.50;
        const wrap_width = document.querySelector('#wrapper').clientWidth;
        
        const standard_width = wrap_width;
        const standard_height = wrap_width * ratio;
        
        setImages(prev => {
            const next = [...prev];
            next.forEach((el, idx) => {
                el.originalWidth = standard_width;
                el.originalHeight = standard_height;
            })    
            return next;
        })
    }
    
    function _setIndex(index) {
        setIndex(index + 1);
    }
    
    return (
        <div className="gallery_wrapper">
            <div className="f-xl">사진첩</div>
            {/* <div className="subtitle">GALLERY</div> */}
            <ImageGallery items={images}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    onBeforeSlide={_setIndex}
            />
            <div className="f-s">{index} / {images.length}</div>
        </div>
    )
};

export default Gallery;