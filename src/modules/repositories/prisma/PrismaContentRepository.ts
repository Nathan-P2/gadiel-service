import Content from 'src/modules/entities/Content';
import prisma from '../../../database/client';
import IContentRepository from '../IContentRepository';

class PrismaContentRepository implements IContentRepository {
  async create(newContent: Content): Promise<void> {
    await prisma.lms_conteudo.create({
      data: {
        ...newContent,
      },
    });
  }
}

export default PrismaContentRepository;
