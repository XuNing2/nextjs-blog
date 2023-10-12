import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';


export default function Post({ postData1 }) {
    return (
        <Layout>
            <Head>
                <title>{postData1.title}</title>
            </Head>

            <h1 className={utilStyles.headingXl}>{postData1.title}</h1>
            {/* Replace {postData.date} with this */}
            <div className={utilStyles.lightText}>
                <Date dateString={postData1.date} />
            </div>
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData1.contentHtml }} />

        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    // paths 添加 1
    // paths.push({params:{id:'1'}})
    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    console.log(params)
    // getPostData函数根据id获取md文件的信息
    const postData1 =await getPostData(params.id);
    return {
        props: {
            postData1,
        },
    };
}