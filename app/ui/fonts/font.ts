import localFont from "next/font/local";


export const euclid = localFont({
    src: [
      {
        path: './EuclidCircularA-Light.woff',
        weight: '300',
        style: 'normal',
      },
      {
        path: './EuclidCircularA-Regular.woff',
        weight: '400',
        style: 'normal',
      },
      {
        path: './EuclidCircularA-Medium.woff',
        weight: '500',
        style: 'normal',
      },
      {
        path: './EuclidCircularA-Bold.woff',
        weight: '700',
        style: 'normal',
      },
    ],
    variable: '--font-euclid',
  })