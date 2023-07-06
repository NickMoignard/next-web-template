import { useQuery } from '@tanstack/react-query';
import { Post } from '../../../nest-service-template/src/posts/entities/post.entity';

export function usePosts() {
    return useQuery<Post[]>({
        queryKey: ['posts'],
        queryFn: async () => {
            const result = await fetch(`http://localhost:11001/posts`);
            const response = await result.json();
            return response;
        }
    });
}
