/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


// module.exports = {
//     webpack: (config) => {
//       config.module.rules.push({
//         test: /\.(pdf)$/,
//         use: {
//           loader: 'file-loader',
//           options: {
//             name: '[name].[ext]',
//             publicPath: '/Users/ojakanbi/Desktop/Personal-protfolio/personal-protfolio/public/assests/oyindamolaAkanbiResume.pdf', // Adjust the public path as needed
//             outputPath: 'pdf/', // Adjust the output path as needed
//           },
//         },
//       });
//       return config;
//     },
//   };
  