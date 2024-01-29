import { Helmet } from "react-helmet-async";

type SiteHelmetType = {
    title: string;
    description: string;
    imageUrl?: string;
    path?: string;
}

const SiteHelmet = (props: SiteHelmetType) => {

    const {
        title,
        description,
        imageUrl,
        path,
    } = props;

    const site = "https://www.catsittinghuddersfield.co.uk" + (path ?? "");
    const img = imageUrl ?? "/share_prev.jpg";

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={site} />
            <meta property="og:image" content={img} />
            <meta property="og:site_name" content="Cat Sitting Huddersfield" />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={img} />
            {/* <meta name="twitter:site" content="@YourTwitterHandle" /> */}

            <link rel="canonical" href={site} />
        </Helmet>
    );
};

export default SiteHelmet;