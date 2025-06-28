import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import type { StructureBuilder } from 'sanity/structure'
import { FiMusic, FiPlayCircle, FiUsers, FiShoppingBag, FiSettings } from 'react-icons/fi'

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
      S.divider(),
      S.listItem()
        .title('About')
        .icon(FiUsers)
        .child(
          S.document()
            .schemaType('about')
            .documentId('about')
            .title('About')
        ),
      S.listItem()
        .title('Store')
        .icon(FiShoppingBag)
        .child(
          S.document()
            .schemaType('store')
            .documentId('store')
            .title('Store')
        ),
      S.listItem()
        .title('Settings')
        .icon(FiSettings)
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
            .title('Settings')
        ),
    ]) 