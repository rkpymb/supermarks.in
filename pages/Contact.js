import React from 'react'
import Head from 'next/head'
import Skeleton from '@mui/material/Skeleton';
import styles from '../styles/Home.module.css'

import Dashboardstyle from '../styles/Dashboard.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { FiChevronRight, FiShoppingBag, FiMapPin, FiCreditCard, FiLogOut } from "react-icons/fi";
import Link from 'next/link'
const Account = () => {


    return (
        <>
            <Head>
                <title>Contact US</title>
                <meta name="description" content="Generated by create next app" />
                
            </Head>

            <div className={styles.container} style={{ padding: 10 }}>
                <h3>Contact us</h3>
                <p>Call us @ +91 000000000</p>
                <p>Email us @ contact@supermarks.in</p>
                <p>Address:  3rd Floor, Bhabua, kaimur, Bihar, 821101 IN.</p>
            </div>
        </>
    )
}

export default Account
