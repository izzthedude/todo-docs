import Layout from "@theme/Layout";
import { HomeHeader } from '../components/HomeHeader';
import { HomeFeatures } from "@site/src/components/HomeFeatures";

export default function Home(): JSX.Element {
    return (
        <Layout
            title="Home"
            description="Documentation website for my Todo app"
        >
            <HomeHeader />
            <main>
                <HomeFeatures />
            </main>
        </Layout>
    );
}
