import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import Home from '../../Home/Home.js'
import Distoryed from '../../Home/Utils/distoryed'
export default function Index() {
    const canvasDom = useRef()
    useEffect(() => {
        const home = new Home(canvasDom.current)
        console.log(home);
        return () => {
            //销毁首页中创建的场景，清理内存
            //把window上的监听事件移除
            window.removeEventListener('resize', home.sizes.resizeFun)
            window.cancelAnimationFrame(home.time.frameid)
            home.time.off('tickTime')
            home.sizes.off('resize')
            const destory = new Distoryed()
        }
    })
    return (
        <div>
            <canvas className='canvas-container' ref={canvasDom}></canvas>
            <div className='house'>
                <div className='vr_text'>vr看房越来越流行,想要去一探究竟吗？点击下方按钮去探索吧~</div>
                <Link className='vr_kf' to='/home'>VR看房</Link>
            </div>
        </div>
    )
}
