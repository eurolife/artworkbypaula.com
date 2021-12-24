import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { makeRequest, getData } from '../lib/api';
import axios from 'axios';
import Layout from '../components/Layout';
import HomeCategories from '../components/HomeCategories';

export default function Home() {
  return (
    <div className="h-full">
      <Head>
        <title>
          Artwork by Paula - Music and pop culture inspired artwork, cards,
          colouring books, and t-shirts
        </title>
        <meta
          name="description"
          content="Original art, prints, cards, colouring books, and t-shirts inspired by music, the arts, pop culture and much more."
        />
      </Head>
      <Layout>
        <div className="container">
          <HomeCategories />
        </div>
      </Layout>
    </div>
  );
}
