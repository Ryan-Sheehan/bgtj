import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import type { StructureBuilder } from 'sanity/structure'
import { FiMusic, FiPlayCircle, FiUsers, FiShoppingBag, FiSettings, FiHome } from 'react-icons/fi'

export default (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Landing Page')
        .icon(FiHome)
        .child(
          S.document()
            .schemaType('landingPage')
            .documentId('landingPage')
            .title('Landing Page')
        ),
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
      // Replace Store single-document with orderable Products list
      orderableDocumentListDeskItem({
        type: 'product',
        title: 'Shop Products',
        icon: FiShoppingBag,
        S,
        context: S.context,
      }),
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