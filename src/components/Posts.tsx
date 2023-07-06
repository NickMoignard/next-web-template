import { useQueryClient } from "@tanstack/react-query";
import { usePosts } from "../hooks/usePosts";

export function Posts() {
    const queryClient = useQueryClient();

    const { status, data, error, isFetching } = usePosts();

    if (error || status === 'error') {
        return <>Error</>
    }

    if (status === 'loading') {
        return <>Loading...</>
    }

    return (
        <div>
            <h3>Posts</h3>
            {data.map((post) => (
                <div key={post.id}>
                    <h4 style={
                        // We can access the query data here to show bold links for
                        // ones that are cached
                        queryClient.getQueryData(['post', post.id])
                            ? {
                                fontWeight: 'bold',
                                color: 'green',
                            }
                            : {}
                    } >{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            ))
            }
            {isFetching && (<div>Background updating...</div>)}
        </div>
    );
}