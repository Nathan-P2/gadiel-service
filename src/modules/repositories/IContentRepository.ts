import Content from '../entities/Content';

interface IContentRepository {
    create(content: Content): Promise<void>
}

export default IContentRepository;
