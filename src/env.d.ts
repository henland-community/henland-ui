/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** base url for the report lists */
  readonly VITE_HENLAND_REPORT: string
  /** url to the raw dist folder on henland-logo repository*/
  readonly VITE_LOGOS: string
  /** the graphql endpoint of the indexer (teztok instance) */
  readonly VITE_HENLAND_GRAPHQL_API: string
  /** the base url of the tzkt API */
  readonly VITE_TZKT_API: string
  readonly VITE_TZPROFILES_GRAPHQL_API: string
  readonly VITE_IMGPROXY: string
  readonly VITE_IPFS_UPLOAD_PROXY: string
  readonly VITE_IPFS_DEFAULT_GATEWAY:
    | 'IPFS_CDN_NODE'
    | 'CLOUDFLARE'
    | 'PINATA'
    | 'IPFS'
    | 'DWEB'
    | 'NFTSTORAGE'
  readonly VITE_TEZOS_RPC: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
