'use client';

import React, { useState } from "react";
import { InView } from 'react-intersection-observer';
import AlertCard from "./alertCard";
import CircularProgress from '@mui/material/CircularProgress';
import styles from '../../styles/alerts.module.scss'

const Client = ({children, Arr}: {children: React.ReactNode, Arr: string[]}) => {
    const [alerts, setAlerts] = useState(Arr)
    const [isLoading, setIsLoading] = useState(false)
    const [example, setExample] = useState([3, 4, 9, 7, 0, 1, 8, 3, 6, 2])

    return (
        <>
        <div className={styles.container}>
            {alerts.map((alert: any, i: number) => {
                return (
                    <AlertCard alert={alert} i={i} key={i}/>
                )
            })}
        </div>
        {/* <div className='progress'><CircularProgress /></div> */}
        {isLoading == true ? <div className='progress'><CircularProgress /></div> : <></>}
        <InView onChange={async (inView, entry) => {
                console.log('entry:', entry)
                if (entry.isIntersecting) {
                    setIsLoading(true)
                    const updatedAlerts = await pushAlerts(alerts)
                    setAlerts(updatedAlerts)
                    setExample((example: any) => example + 1)
                    setIsLoading(false)
                }
            }}>
        </InView>
        </>
    )

}

const getAlerts = async (page: number, limit: number, offset: number) => {
    const res = await fetch(`/api/alerts?page=${page}&limit=${limit}&offset=${offset}`);
    return res.json();
}

export const pushAlerts = async (Arr: string[]): Promise<string[]> => {
    console.log('pushing alerts...')
    const res = await getAlerts(0, 10, Arr.length)
    res.map( (e: string) => {Arr.push(e)})
    return Arr
}

export default Client;