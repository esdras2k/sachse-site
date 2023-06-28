'use client';

import React from "react";
import Link from 'next/link';
import { useRouter } from "next/navigation";

import '../../styles/alerts.module.scss'
import styles from '../../styles/alerts.module.scss'
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

type Props = {
    alert: any;
    i: number;
}

const severity = (type: string) => {
    switch (type) {
        case 'Alert':
          return 'error'
        case 'Community':
            return 'info'
        case 'Advisory':
            return 'warning'
        default:
            return 'error'
      }
}

const AlertCard: React.FC<Props> = ({alert, i}: Props) => {
    const router = useRouter()
    
    return (
        <>
            <Card key={i} className={`${styles.card} col-12 col-md-6 col-lg-4`} onClick={() => router.push(`/alerts/${alert._id}`)}>
            <Alert className={`${styles.type} ${alert.type}`} severity={severity(alert.type)}>{`Message Type: ${alert.type}`}</Alert>
                <CardContent className={`${styles.content}`}>
                    <p className="date">{new Date(alert.createdAt).toLocaleString()}</p>
                    <h3>{alert.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: alert.body }}></p>
                </CardContent>
                <Button size="small">Read More</Button>
            </Card>
        </>
    )

}

export default AlertCard