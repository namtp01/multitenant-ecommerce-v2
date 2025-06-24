interface Props {
    params: Promise<{
        category: string;
    }>
}

const Page = async ({ params }: Props) => {
    const { category } = await params;

    return (
        <div>
            1 {category}
        </div>
    );
}
 
export default Page;