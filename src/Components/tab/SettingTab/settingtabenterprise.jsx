import React from 'react'
import Submitbutton from '../../ui/Button/SubmitButton/Submitbutton'
import Labelinputtext from '../../ui/input/Labelinputtext/Labelinputtext'

export default function settingtabenterprise() {
    return (
        <div>
            <div>
                <p><span className='font-bold'>Policy & Rules:</span> Define enterprise-wide operational constraints and retention policies.</p>
                <div className='my-4 flex flex-wrap justify-between'>
                    <div className='w-2/5'>
                        <p className='font-bold text-sm'>Data Retension Period (in days)</p>
                        <Labelinputtext label="period" placeholder={30} />
                    </div>
                    <div className='w-2/5'>
                        <p className='font-bold text-sm'>Auto Logout Timer (minutes)</p>
                        <Labelinputtext label="timer" placeholder={30} />
                    </div>
                    <div className='w-2/5'>
                        <p className='font-bold text-sm'>Auto Log Retention (in days)</p>
                        <Labelinputtext label="days" placeholder={30} />
                    </div>
                </div>
            </div>
            <div>
                <p><span className='font-bold'>Localization:</span> Set the enterprise's regional preferences and user experience defaults.</p>
                <div className='my-4 flex flex-wrap justify-between'>
                    <div className='w-2/5'>
                        <p className='font-bold text-sm'>Timezone</p>
                        <Labelinputtext label="select timezone" placeholder={"UTC+0"} />
                    </div>
                    <div className='w-2/5'>
                        <p className='font-bold text-sm'>Default Language</p>
                        <Labelinputtext label="select language" placeholder={"English"} />
                    </div>
                    <div className='w-2/5'>
                        <p className='font-bold text-sm'>Currency Format</p>
                        <Labelinputtext label="select currency" placeholder={"INR"} />
                    </div>
                </div>
            </div>
            <Submitbutton title="Save the changes" />
        </div>
    )
}
