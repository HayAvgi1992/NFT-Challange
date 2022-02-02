import React, { useEffect, useState } from 'react'
import instegramLogo from '../assets/owner/instagram.png'
import moreIcon from '../assets/owner/more.png'
import twitterLogo from '../assets/owner/twitter.png'
import './Main.css'

function Main({ selectedPunk, punkListData, containerTheme }) {
    const [activePunk, setActivePunk] = useState(punkListData[0])
    const selectedTheme = containerTheme ? 'lightName' : 'darkName'

    useEffect (() => {
        setActivePunk(punkListData[selectedPunk])
    
    }, [selectedPunk, punkListData])

    return (
        <div className='main'>
            <div className='mainContainer'>
                <div className='punkHighlight'>
                    <div className='punkContainer'>
                        <img
                            className='selectedPunk'
                            alt=''
                            src={activePunk.image_original_url}
                        />

                    </div>
                </div>

                <div className='punkDetails' style={{ color: '#fff' }}>
                    <div className={['title', selectedTheme].join(" ")}>
                    {/* <div className={'title'}> */}
                        {activePunk.name}
                        {/* Bandana Punk */}
                        <span className='itemNumber'>.#{activePunk.token_id}</span>
                    </div>
                    <div className='owner'>
                        <div className='ownerImageContainer'>
                            <img
                                src={activePunk.owner.profile_img_url}
                                alt=''
                            />
                        </div>

                        <div className={['ownerDetails', selectedTheme].join(" ")}>
                            <div className='ownerNameAndHandle'>
                                <div>{activePunk.owner.address}</div>
                                <div className='ownerHandle'>@HayAvgi</div>
                            </div>

                            <div className='ownerLink'>
                                <img src={instegramLogo} alt='' />
                            </div>
                            <div className='ownerLink'>
                                <img src={twitterLogo} alt='' />
                            </div>
                            <div className='ownerLink'>
                                <img src={moreIcon} alt='' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main
