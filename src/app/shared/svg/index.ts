// Define svgIcons with SafeHtml values
export const svgIcons: { [key: string]: string } = {
  logo: `
    <svg width="107" height="41" viewBox="0 0 107 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 6.50984V12.6863L1.55882 14.2746C3.23529 15.9804 10.2941 23.304 12.1471 25.2451L13.2941 26.451L10.0588 29.804C8.29412 31.6275 6.32353 33.6569 5.70588 34.3334C5.05882 35.0098 3.55882 36.5981 2.35294 37.8628L0.147059 40.1863L7.35294 40.2746L14.5294 40.3334L20.0882 34.8334L25.6471 29.304L30.9706 34.8334L36.3235 40.3334H43.6176C47.9706 40.3334 50.8823 40.2157 50.8235 40.0687C50.7941 39.9216 47.8824 36.8628 44.4118 33.2451C40.9412 29.6569 38.0588 26.6569 38.0294 26.5393C37.9412 26.3334 40.2353 23.8922 46.7941 17.1863L51.1765 12.6863V6.50984V0.333374H43.8529H36.5588L32.1765 4.74514C29.7647 7.18632 27.7059 9.33337 27.5882 9.53926C27.4706 9.80396 27.9118 10.4804 28.9118 11.451L30.4412 12.951L32.7353 13.0687C33.9706 13.1275 35.0588 13.2451 35.1471 13.304C35.2059 13.3922 34.1471 14.6275 32.7941 16.0687L30.3235 18.7157L27.9706 16.2157L25.5882 13.7157L23.2059 16.1863L20.8235 18.6569L18.3529 16.0687C17 14.6275 15.8824 13.3334 15.8824 13.2157C15.8824 13.0981 16.9706 12.9804 18.3235 12.9804H20.7647L22.3529 11.3628L23.9412 9.74514L20.8824 6.59808C19.1765 4.8922 17.0882 2.77455 16.2647 1.92161L14.7059 0.333374H7.35294H0V6.50984ZM7.94118 6.6569V9.74514H5.73529H3.52941V6.6569V3.56867H5.73529H7.94118V6.6569ZM15.9412 6.42161C17.5294 8.00984 18.8235 9.3922 18.8235 9.50984C18.8235 9.6569 17.1765 9.74514 15.1471 9.74514H11.4706V6.6569V3.56867H12.2647C12.9118 3.56867 13.7353 4.21573 15.9412 6.42161ZM39.6471 6.71573L39.7353 9.74514H35.8235H31.9118L35 6.6569C37.5 4.1569 38.2353 3.56867 38.8235 3.62749C39.5588 3.71573 39.5588 3.74514 39.6471 6.71573ZM47.6471 6.6569V9.74514H45.4412H43.2353V6.6569V3.56867H45.4412H47.6471V6.6569ZM12.8824 15.3334C14.1471 16.5687 16.3824 18.8628 17.9118 20.4216C19.4412 22.0098 20.7353 23.2746 20.8529 23.2746C20.9412 23.2746 22.0588 22.2451 23.2941 21.0098L25.5882 18.7157L27.9412 21.0687L30.3235 23.4216L35.3824 18.2157L40.4706 12.9804L42.9118 13.0981C44.2353 13.1569 45.4118 13.2746 45.5 13.3628C45.6176 13.5098 41.2941 18.0687 34.7941 24.6275C33.9412 25.5098 33.2353 26.2746 33.2353 26.3922C33.2353 26.4804 35.3824 28.804 38.0294 31.5393C40.6471 34.2746 42.8529 36.6569 42.8824 36.804C42.9412 36.9804 42 37.0981 40.5 37.0981H38L31.7941 30.7157L25.5882 24.304L19.3529 30.7157L13.0882 37.1275L10.6765 37.0981C9.32353 37.0981 8.23529 37.0098 8.23529 36.9216C8.23529 36.5981 9.91176 34.7746 14.0294 30.5393C17.5588 26.9216 17.9412 26.451 17.5882 25.9804C17.3824 25.7157 15.1471 23.3628 12.6176 20.7746C7.67647 15.6863 5.58823 13.451 5.58823 13.1863C5.58823 13.0981 6.73529 13.0393 8.11765 13.0393L10.6471 13.0687L12.8824 15.3334Z" fill="black"/>
      <path d="M79.6199 15.0987C76.9141 15.7458 75.1788 17.2164 74.5023 19.4517C73.9141 21.4811 73.9729 21.5399 76.0905 21.5399C77.767 21.5399 78.0023 21.4811 78.0023 20.9811C78.0023 20.687 78.3846 20.0105 78.8552 19.5105C79.5905 18.7164 79.9141 18.5987 81.2376 18.5987C82.5317 18.5987 82.8846 18.7164 83.6199 19.4811C84.3258 20.187 84.4435 20.4517 84.2082 20.8929C83.8846 21.5105 83.2964 21.7752 80.1199 22.7458C75.7082 24.0987 74.1788 25.834 74.1788 29.5693V31.5399L81.0317 31.4811L87.8552 31.3929V29.7752V28.1576L83.0317 28.0105C78.5611 27.8634 78.267 27.834 78.767 27.3929C79.0905 27.1282 80.6494 26.4811 82.267 25.9811C86.5023 24.687 88.0023 23.2458 88.0023 20.5105C88.0023 16.8634 83.7376 14.0987 79.6199 15.0987Z" fill="black"/>
      <path d="M55.8552 15.4223C56.0023 15.6282 57.3552 17.4811 58.8552 19.5399L61.5611 23.3046L60.9141 24.2458C60.5317 24.7752 59.267 26.5693 58.0905 28.2164C56.9141 29.8634 55.9435 31.3046 55.9435 31.3929C55.9435 31.4811 56.9141 31.5399 58.1199 31.5399H60.3258L62.0317 29.0399C62.9729 27.687 63.8258 26.5399 63.9141 26.5399C64.0317 26.5399 64.767 27.5105 65.5905 28.687C66.4141 29.8929 67.267 31.0105 67.5023 31.2164C67.7964 31.4517 68.7082 31.5399 70.0611 31.4811L72.1788 31.3929L70.5023 29.0399C69.5611 27.7458 68.2964 26.0105 67.6788 25.187C67.0317 24.3634 66.5317 23.5105 66.5317 23.3046C66.5317 23.0987 67.2964 21.834 68.2376 20.5399C70.5023 17.4223 71.8258 15.4517 71.8258 15.2458C71.8258 15.1576 70.8552 15.0693 69.6494 15.0693H67.5023L65.767 17.5399C64.7964 18.9223 63.9729 20.0399 63.8847 20.0399C63.7964 20.0399 62.9729 18.9223 62.0317 17.5693L60.3258 15.0693H57.9435C56.0905 15.0693 55.6494 15.1576 55.8552 15.4223Z" fill="black"/>
      <path d="M95.3846 17.628C94.4141 19.0692 92.9141 21.2163 92.0611 22.4516C90.5611 24.5692 90.5023 24.7457 90.5905 26.3339L90.7082 28.0104H95.2376C99.3552 28.0104 99.767 28.0692 99.7964 28.5104C99.7964 28.8045 99.8258 29.5692 99.8552 30.2163L99.9141 31.3927L101.767 31.481L103.591 31.5692V29.981C103.591 28.1869 103.767 28.0104 105.679 28.0104H106.855L106.767 26.3045L106.679 24.628L105.149 24.5398L103.62 24.4516L103.532 21.3339L103.443 18.1869L101.62 20.3633C100.149 22.0692 99.767 22.7457 99.767 23.5104V24.481H97.5611C96.3552 24.481 95.3552 24.3927 95.3552 24.2457C95.3552 24.128 96.0317 23.0986 96.8846 21.981C100.473 17.0986 101.443 15.7751 101.649 15.4222C101.796 15.1574 101.326 15.0692 99.5317 15.0692H97.1788L95.3846 17.628Z" fill="black"/>
    </svg>
  `,
  'mobile-menu': `
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
    </svg>
    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
    </svg>
  `,
  'check-box': `
   <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              fill="#fff"
              d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
            ></path>
          </svg>
  `,
};