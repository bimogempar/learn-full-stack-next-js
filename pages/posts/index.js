import { authPage } from "../middlewares/authorizationPage";

export async function getServerSideProps(context) {
    const { token } = await authPage(context);
    console.log(token)
    return { props: {} }
}

export default function postIndex() {
    return (
        <div>
            <h1>All Posts</h1>
        </div>
    )
}