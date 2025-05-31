import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { StructureBuilder } from 'sanity/structure'
import { FiMusic, FiPlayCircle } from 'react-icons/fi'

export default (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      orderableDocumentListDeskItem({
        type: 'release',
        title: 'Releases',
        icon: FiMusic,
        S,
        context: S.context,
      }),
      orderableDocumentListDeskItem({
        type: 'video',
        title: 'Videos',
        icon: FiPlayCircle,
        S,
        context: S.context,
      }),
      // Add other document types here if needed
    ]) 