
export interface Wallpaper {
    url: string,
    name: string,

}

interface FullWallpaper extends Wallpaper{
    liked: boolean;
    suggested: boolean;
    library: boolean
}

export function useSuggestedWallpapers(): FullWallpaper[]{
    const wallpapers = useWallpaper();
    return wallpapers.filter(wallpapers => wallpapers.suggested)
}
export function useLikedWallpapers(): FullWallpaper[]{
    const wallpapers = useWallpaper();
    return wallpapers.filter(wallpapers => wallpapers.liked)
}
export function useLibraryWallpapers(): FullWallpaper[]{
    const wallpapers = useWallpaper();
    return wallpapers.filter(wallpapers => wallpapers.library)
}

export function useWallpaper(): FullWallpaper[] {
    return [{
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/1gBtIFLZTxy8ssd_avBQwQ",
        "name": "Heritage",
        liked: true,
        suggested:true,
        library: false
    },{
        url:"https://ideogram.ai/assets/image/lossless/response/LHEkpvKtRT2A_viJaKJskg",
        "name": "Late night",
        liked: false,
        suggested:true,
        library: false
    },{
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/bHLa-Bv3Rq-ugzQLn_bkaw",
        "name": "Late night",
        liked: true,
        suggested:false,
        library: true
    },{
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/1ZKo8d00QiuNBE3x8GTJWw",
        "name": "Late night",
        liked: false,
        suggested:true,
        library: false
    },{
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/LH-RfC-SQyW__wZykXI5ag",
        "name": "Late night",
        liked: true,
        suggested:false,
        library: true
    },{
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/4x-vZ0sQT1ihh7MrwurPyg",
        "name": "Late night",
         liked: false,
        suggested:true,
        library: false
    },{
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/W0hKoXNNQ--JOGEkckckEw",
        "name": "Late night",
        liked: true,
        suggested:false,
        library: true
    },{
        url:"https://ideogram.ai/assets/image/lossless/response/W0hKoXNNQ--JOGEkckckEw",
        "name": "Late night",
        liked: false,
        suggested:true,
        library: false
    },]
}