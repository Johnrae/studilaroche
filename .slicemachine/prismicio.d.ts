// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Work documents */
interface WorkDocumentData {
    /**
     * Album Art field in *Work*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: work.album_art
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    album_art: prismicT.ImageField<"square">;
    /**
     * Title field in *Work*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: work.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Artist field in *Work*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: work.artist
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    artist: prismicT.KeyTextField;
    /**
     * Release Date field in *Work*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: work.release_date
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    release_date: prismicT.DateField;
}
/**
 * Work document from Prismic
 *
 * - **API ID**: `work`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WorkDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<WorkDocumentData>, "work", Lang>;
export type AllDocumentTypes = WorkDocument;
/**
 * Primary content in BasicContent → Primary
 *
 */
interface BasicContentSliceDefaultPrimary {
    /**
     * Body field in *BasicContent → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: basic_content.primary.body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * Default variation for BasicContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: `BasicContent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BasicContentSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<BasicContentSliceDefaultPrimary>, never>;
/**
 * Slice variation for *BasicContent*
 *
 */
type BasicContentSliceVariation = BasicContentSliceDefault;
/**
 * BasicContent Shared Slice
 *
 * - **API ID**: `basic_content`
 * - **Description**: `BasicContent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BasicContentSlice = prismicT.SharedSlice<"basic_content", BasicContentSliceVariation>;
/**
 * Item in ImageGallery → Items
 *
 */
export interface ImageGallerySliceDefaultItem {
    /**
     * Image field in *ImageGallery → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image_gallery.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<"thumbnail">;
}
/**
 * Default variation for ImageGallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ImageGallery`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageGallerySliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<ImageGallerySliceDefaultItem>>;
/**
 * Slice variation for *ImageGallery*
 *
 */
type ImageGallerySliceVariation = ImageGallerySliceDefault;
/**
 * ImageGallery Shared Slice
 *
 * - **API ID**: `image_gallery`
 * - **Description**: `ImageGallery`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageGallerySlice = prismicT.SharedSlice<"image_gallery", ImageGallerySliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { WorkDocumentData, WorkDocument, AllDocumentTypes, BasicContentSliceDefaultPrimary, BasicContentSliceDefault, BasicContentSliceVariation, BasicContentSlice, ImageGallerySliceDefaultItem, ImageGallerySliceDefault, ImageGallerySliceVariation, ImageGallerySlice };
    }
}
