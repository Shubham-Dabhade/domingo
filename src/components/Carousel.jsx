import React, { useEffect, useRef, useState } from 'react';
import "../components/css/Carousel.scss";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Carousel=(props)=>{
    const block = useRef();
    const length=1050;


    const [times,setTimes]=useState(0);
    const [value1,setValue1]=useState(0);
    const [text,setText]=useState(1);

    const [counter,setCounter]=useState(1);

    let cal=(-length)*(counter)
    let cal1=(-length)*(counter+1)
    useEffect(()=>{
        block.current.style.transform="translateX("+(cal)+"px)";
        console.log("running useEffect");
        document.body.style.background="linear-gradient(to right, #3CC1A0 50%, #BF7652 50%)";
        document.body.style.backgroundSize="200% 100%";
        document.body.style.backgroundPosition="left bottom";
        document.body.style.transition="all .5s ease-out";
    },[]);

    function solidBlack(){
        document.body.style.transition="none";
        document.body.style.background="linear-gradient(to right, #BF7652 50%, #3CC1A0 50%)";
        document.body.style.backgroundSize="200% 100%";
        document.body.style.backgroundPosition="left bottom";
    };
    
    function solidWhite(){
        document.body.style.transition="none";
        document.body.style.background="linear-gradient(to right, #3CC1A0 50%, #BF7652 50%)";
        document.body.style.backgroundSize="200% 100%";
        document.body.style.backgroundPosition="left bottom";
    };




    function prevClicked(){

        setValue1(value1+1);
        if((value1+1)%2!==0){

            if(text===0){
                document.body.style.transition="none";
                document.body.style.background="linear-gradient(to right, #3CC1A0 50%, #BF7652 50%)";
                document.body.style.backgroundSize="200% 100%";
                document.body.style.backgroundPosition="right bottom";
                setTimeout(()=>{
                    document.body.style.transition="all .5s ease-out";
                    document.body.style.backgroundSize="200% 100%";
                    document.body.style.backgroundPosition="left bottom";
                    setText(1);
                },100);
                props.onRefer(0);
            }else{
                document.body.style.transition="none";
                document.body.style.background="linear-gradient(to right, #BF7652 50%, #3CC1A0 50%)";
                document.body.style.backgroundSize="200% 100%";
                document.body.style.backgroundPosition="right bottom";
                setTimeout(()=>{
                    document.body.style.transition="all .5s ease-out";
                    document.body.style.backgroundSize="200% 100%";
                    document.body.style.backgroundPosition="left bottom";
                    setText(0);
                },100);
                props.onRefer(1);
            }
        }
        else if((value1+1)%2==0){
            props.onRefer(1);
            if(text===1){
                document.body.style.transition="none";
                document.body.style.background="linear-gradient(to right, #BF7652 50%, #3CC1A0 50%)";
                document.body.style.backgroundSize="200% 100%";
                document.body.style.backgroundPosition="right bottom";
                setTimeout(()=>{
                    document.body.style.transition="all .5s ease-out";
                    document.body.style.backgroundSize="200% 100%";
                    document.body.style.backgroundPosition="left bottom";
                    setText(0);
                },100);
                props.onRefer(1);
            }else{
                document.body.style.transition="none";
                document.body.style.background="linear-gradient(to right, #3CC1A0 50%, #BF7652 50%)";
                document.body.style.backgroundSize="200% 100%";
                document.body.style.backgroundPosition="right bottom";
                setTimeout(()=>{
                    document.body.style.transition="all .5s ease-out";
                    document.body.style.backgroundSize="200% 100%";
                    document.body.style.backgroundPosition="left bottom";
                    setText(1);
                },100);
                props.onRefer(0);
            }
        }
        if(counter===1){

            block.current.style.transition="transform 0.3s ease-in-out";
            console.log(counter);
            setCounter(counter-1);
            block.current.style.transform="translateX("+(-1050)*(counter-1)+"px)";
            setTimeout(()=>{
                block.current.style.transform="translateX("+(-2100) +"px)";
                block.current.style.transition="none";
                setCounter(2);
            },300);

        }
        else{
            block.current.style.transition="transform 0.3s ease-in-out";
            setCounter(counter-1);
            block.current.style.transform="translateX("+(-1050)*(counter-1)+"px)";
        }
    }
    function nextClicked(){
        setTimes(times+1);
        if((times+1)%2!==0){
            console.log(text);
            if(text===0){
                console.log("in white");
                document.body.style.transition="all .3s ease-out";
                document.body.style.backgroundSize="200% 100%";
                document.body.style.backgroundPosition="right bottom";
    
                setText(1);
                setTimeout(()=>{
                    solidWhite();
                },500);
                props.onRefer(0);
            }
            else{
                console.log("not in white");
                document.body.style.transition="all .5s ease-out";
                document.body.style.backgroundSize="200% 100%";
                document.body.style.backgroundPosition="right bottom";
                setText(0);
                setTimeout(()=>{
                    solidBlack();
                },500);
                props.onRefer(1);
            }
    
        }
        else if((times+1)%2==0){
            if(text===1){
                document.body.style.transition="all .5s ease-out";
                document.body.style.backgroundSize="200% 100%";
                document.body.style.backgroundPosition="right bottom";
                setText(0);
                console.log(text+"after setting on 2nd click should be black up");
                setTimeout(()=>{
                    solidBlack();
                },500);  
                props.onRefer(1);
            }
            else{
                document.body.style.transition="all .5s ease-out";
                document.body.style.backgroundSize="200% 100%";
                document.body.style.backgroundPosition="right bottom";
                setText(1);
                setTimeout(()=>{
                    solidWhite();
                },500);
                props.onRefer(0);
            }
        }
        if(counter===2){
            setText(1);
            setTimeout(()=>{
                solidWhite();
            },500);
            block.current.style.transition="transform 0.3s ease-in-out";
            setCounter(counter+1);
            block.current.style.transform="translateX("+(cal1)+"px)";
            setTimeout(()=>{
                block.current.style.transform="translateX("+(-1050) +"px)";
                block.current.style.transition="none";
                setCounter(1);
            },500);
        }
        if(counter<4){
            block.current.style.transition="transform 0.3s ease-in-out";
            setCounter(counter+1);
            block.current.style.transform="translateX("+(cal1)+"px)";
        }
    }

    return(
        <>

            <div className='carousel1'>
                <ArrowBackIosIcon className='arrowBackward' onClick={prevClicked}/>
                <div className='carouselInside' ref={block}>
                    <section className='carouselSlide1' id="lastClone">
                        <div className='carouselItem1'>
                            <div className='number1'>
                                02
                            </div>
                            <div className='quote1'>
                                DREAM
                            </div>
                            <div className='line1'>
                            </div>
                            <button className='left1'>Explore</button>
                            <button className='right1'>Amaze Me!</button>
                            <div className='specifics1'>
                                The perfect combination of fresh spices to ingredients to up your morning
                            </div>
                            <div className='image1'>
                                <img className="image2" src={require('../components/images/pngwing.com (2).png')} alt=''/>
                            </div>
                        </div>
                    </section>
                    <section className='carouselSlide'>
                        <div className='carouselItem'>
                            <div className='number'>
                                01
                            </div>
                            <div className='quote'>
                                CRAVE
                            </div>
                            <div className='line'>
                            </div>
                            <button className='left'>Explore</button>
                            <button className='right'>Amaze Me!</button>
                            <div className='specifics'>
                                The perfect combination of fresh spices to ingredients to up your morning
                            </div>
                            <div className='image'>
                                <img className="image1" src={require('../components/images/pngwing.com.png')} alt=''/>
                            </div>
                        </div>
                    </section>
                    <section className='carouselSlide1'>
                        <div className='carouselItem1'>
                            <div className='number1'>
                                02
                            </div>
                            <div className='quote1'>
                                DREAM
                            </div>
                            <div className='line1'>
                            </div>
                            <button className='left1'>Explore</button>
                            <button className='right1'>Amaze Me!</button>
                            <div className='specifics1'>
                                The perfect combination of fresh spices to ingredients to up your morning
                            </div>
                            <div className='image1'>
                                <img className="image2" src={require('../components/images/pngwing.com (2).png')} alt=''/>
                            </div>
                        </div>
                    </section>
                    <section className='carouselSlide' id="firstClone">
                        <div className='carouselItem'>
                            <div className='number'>
                                01
                            </div>
                            <div className='quote'>
                                CRAVE
                            </div>
                            <div className='line'>
                            </div>
                            <button className='left'>Explore</button>
                            <button className='right'>Amaze Me!</button>
                            <div className='specifics'>
                                The perfect combination of fresh spices to ingredients to up your morning
                            </div>
                            <div className='image'>
                                <img className="image1" src={require('../components/images/pngwing.com.png')} alt=''/>
                            </div>
                        </div>
                    </section>  
                </div>
                <ArrowForwardIosIcon className='arrowForward' onClick={nextClicked}/>
            </div>
        </>
    )
}

export default Carousel;

