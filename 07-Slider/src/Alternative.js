import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';


function App() {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        // if (index >= people.length - 1) {
        //     setIndex(0);
        // }
        // else {
        //     setIndex(index + 1);
        // }

        setIndex((oldindex) => {
            let newIndex = oldindex + 1;
            if (newIndex > people.length - 1) {
                newIndex = 0;
            }
            return newIndex;
        })
    }

    const prevSlide = () => {
        setIndex((oldIndex) => {
            let newIndex = oldIndex - 1;
            if (newIndex < 0) {
                newIndex = people.length - 1;
            }
            return newIndex;
        })
        // if (index <= 0) {
        //     setIndex(people.length - 1);
        // }
        // else {
        //     setIndex(index - 1);
        // }

    }




    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                let newIndex = oldIndex + 1;
                if (newIndex > people.length - 1) {
                    newIndex = 0;
                }
                return newIndex;
            })
            // if (index >= people.length - 1) {
            //     setIndex(0);
            // }
            // else {
            //     setIndex(index + 1);
            // }
        }, 3000);
        //cleanup fun
        return () => clearInterval(slider);
    }, [index])
    return (
        <section className='section'>
            <div className='title'>
                <h2>
                    <span>/</span>reviews
                </h2>
            </div>
            <div className='section-center'>
                {people.map((person, personIndex) => {
                    const { id, image, title, name, quote } = person;
                    let position = "nextSlide";
                    if (personIndex === index) {
                        position = "activeSlide";
                    }
                    if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                        position = "lastSlide";
                    }
                    return (
                        <article className={position} key={id}>
                            <img src={image} alt={name} className='person-img' />
                            <h4>{name}</h4>
                            <p className='title'>
                                {title}
                            </p>
                            <p className='text'>
                                {quote}
                            </p>
                            <FaQuoteRight className='icon' />
                        </article>
                    );
                })}
                <button className='prev' onClick={prevSlide}>
                    <FiChevronLeft />
                </button>
                <button className='next' onClick={nextSlide}>
                    <FiChevronRight />
                </button>
            </div>
        </section>
    );
}

export default App;
