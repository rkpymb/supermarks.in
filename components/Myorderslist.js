import { useState, useEffect } from 'react'
import Head from 'next/head'
import Skeleton from '@mui/material/Skeleton';
import styles from '../styles/Home.module.css'

import Image from 'next/image'
import Dashboardstyle from '../styles/Dashboard.module.css'
import { useRouter } from 'next/router'
import { FiChevronRight, FiNavigation, FiInfo, FiCoffee, FiFileText, FiClock, FiUnlock, FiShoppingBag, FiMapPin, FiCreditCard, FiLogOut } from 'react-icons/fi';

import Link from 'next/link'

const MyOrders = ({ SetHeader_true }) => {
    const router = useRouter()
    const [UserlogData, setUserlogData] = useState();
    const [Retdata, setRetdata] = useState([]);
    SetHeader_true(false)
    useEffect(() => {

        try {
            if (localStorage.getItem('userid')) {

                const usermobnow = localStorage.getItem('userid');
                const userid = { usermobnow }
                const data = fetch("/api/MyOrderslist", {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(userid)
                }).then((a) => {
                    return a.json();
                })
                    .then((parsedUser) => {
                        console.log(parsedUser)
                        setRetdata(parsedUser)
                    })

            } else {

            }
        } catch (error) {
            console.error(error)


        }
        // check login credential end

    }, [router.query]);


    return (
        <>
            <Head>
                <title>My Orders</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.container}>
                <div className={styles.DashboardBox}>
                    <div className={styles.Welcomeuserbox}>
                        <span>My Orders</span>
                    </div>

                    {Retdata.map((item) => {
                        return <div className={styles.testboxtestlist} key={item.id}>
                            <div className={styles.testboxtestlistA} >
                                <div className={styles.Testlistitem}>

                                    <div className={styles.Testlistitems}>

                                        <div> <span>{item.OrderTitle}</span></div>
                                        <div className={styles.testiconsBox}>
                                            <div className={styles.testiconsItemMain}>
                                                <span><FiCoffee /></span>   <span>{item.OrderStatusText}</span>
                                            </div>
                                            <div className={styles.testiconsItemMain}>
                                                <span><FiFileText /></span>   <span>{item.PayStatusText}</span>
                                            </div>
                                            <div className={styles.testiconsItemMain}>
                                                <span><FiClock /></span>   <span>{item.date}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <Link href={`/ClassRoom/`}>
                                        <div className={styles.Btn_icon}>
                                            <span><FiChevronRight /></span>
                                            <small>Start</small>

                                        </div>
                                    </Link>

                                </div>


                            </div>

                        </div>
                    }

                    )}
                </div>
            </div>
        </>
    )
}

export default MyOrders
