
type ObjectSocialMedia = {
    name: string,
    svg: string,
    url: string,
    title: string
}



export const listSocialMedia: ObjectSocialMedia[] = [
    {
        name: "GitHub",
        svg: `<svg width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="49" rx="24.5" fill="url(#paint0_linear_126_826)"/>
        <path d="M25 14.7466C22.6255 14.7467 20.3285 15.5917 18.52 17.1304C16.7115 18.6692 15.5095 20.8012 15.1292 23.1451C14.7488 25.4889 15.2148 27.8917 16.4439 29.9233C17.673 31.955 19.5849 33.4831 21.8375 34.2341C22.3375 34.3216 22.525 34.0216 22.525 33.7591C22.525 33.5216 22.5125 32.7341 22.5125 31.8966C20 32.3591 19.35 31.2841 19.15 30.7216C18.9281 30.1745 18.5763 29.6897 18.125 29.3091C17.775 29.1216 17.275 28.6591 18.1125 28.6466C18.4323 28.6813 18.739 28.7926 19.0067 28.971C19.2743 29.1494 19.495 29.3897 19.65 29.6716C19.7868 29.9173 19.9707 30.1336 20.1912 30.3081C20.4117 30.4826 20.6645 30.6118 20.9351 30.6885C21.2056 30.7651 21.4886 30.7876 21.7679 30.7547C22.0472 30.7218 22.3172 30.634 22.5625 30.4966C22.6058 29.9882 22.8324 29.5129 23.2 29.1591C20.975 28.9091 18.65 28.0466 18.65 24.2216C18.636 23.2278 19.0027 22.2662 19.675 21.5341C19.3693 20.6703 19.4051 19.7224 19.775 18.8841C19.775 18.8841 20.6125 18.6216 22.525 19.9091C24.1613 19.4591 25.8887 19.4591 27.525 19.9091C29.4375 18.6091 30.275 18.8841 30.275 18.8841C30.645 19.7224 30.6808 20.6703 30.375 21.5341C31.0494 22.2649 31.4164 23.2273 31.4 24.2216C31.4 28.0591 29.0625 28.9091 26.8375 29.1591C27.0762 29.401 27.26 29.6914 27.3764 30.0106C27.4929 30.3298 27.5393 30.6704 27.5125 31.0091C27.5125 32.3466 27.5 33.4216 27.5 33.7591C27.5 34.0216 27.6875 34.3341 28.1875 34.2341C30.4362 33.477 32.3426 31.9453 33.5664 29.9126C34.7903 27.8799 35.2519 25.4784 34.8689 23.1368C34.4859 20.7952 33.2832 18.666 31.4755 17.1291C29.6678 15.5922 27.3727 14.7478 25 14.7466Z" fill="white"/>
        <defs>
        <linearGradient id="paint0_linear_126_826" x1="3" y1="11.5" x2="25" y2="49" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4AD66D"/>
        <stop offset="1" stop-color="#277039"/>
        </linearGradient>
        </defs>
        </svg>
        `,
        url: "https://github.com/Ezequiel144",
        title: "Ezequiel144"
    },
    {
        name: "Whatsapp",
        svg: `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" rx="25" fill="url(#paint0_linear_126_835)"/>
        <path d="M30.3374 27.3115C30.1077 27.1966 28.6146 26.5075 28.3848 26.3926C28.1551 26.2778 27.9254 26.2778 27.6957 26.5075C27.466 26.7372 27.0066 27.4263 26.7768 27.6561C26.662 27.8858 26.4323 27.8858 26.2026 27.7709C25.3986 27.4263 24.5946 26.9669 23.9054 26.3926C23.3312 25.8184 22.7569 25.1292 22.2974 24.4401C22.1826 24.2104 22.2974 23.9806 22.4123 23.8658C22.5272 23.7509 22.642 23.5212 22.8717 23.4064C22.9866 23.2915 23.1014 23.0618 23.1014 22.9469C23.2163 22.8321 23.2163 22.6024 23.1014 22.4875C22.9866 22.3727 22.4123 20.9944 22.1826 20.4201C22.0677 19.6161 21.838 19.6161 21.6083 19.6161H21.034C20.8043 19.6161 20.4597 19.8458 20.3449 19.9607C19.6558 20.6498 19.3112 21.4538 19.3112 22.3727C19.426 23.4064 19.7706 24.4401 20.4597 25.3589C21.7232 27.1966 23.3312 28.6898 25.2837 29.6086C25.858 29.8383 26.3174 30.068 26.8917 30.1829C27.466 30.4126 28.0403 30.4126 28.7294 30.2978C29.5334 30.1829 30.2225 29.6086 30.682 28.9195C30.9117 28.46 30.9117 28.0006 30.7968 27.5412L30.3374 27.3115ZM33.2088 16.8596C28.7294 12.3801 21.4935 12.3801 17.0141 16.8596C13.3386 20.535 12.6495 26.1629 15.1763 30.6423L13.5684 36.5L19.6558 34.892C21.3786 35.8109 23.2163 36.2703 25.054 36.2703C31.3711 36.2703 36.4248 31.2166 36.4248 24.8995C36.5396 21.9132 35.2762 19.0418 33.2088 16.8596ZM30.1077 32.9395C28.6146 33.8583 26.8917 34.4326 25.054 34.4326C23.3312 34.4326 21.7232 33.9732 20.23 33.1692L19.8855 32.9395L16.3249 33.8583L17.2438 30.4126L17.0141 30.068C14.2575 25.4738 15.6358 19.731 20.1152 16.8596C24.5946 13.9881 30.3374 15.4813 33.094 19.8458C35.8505 24.3252 34.5871 30.1829 30.1077 32.9395Z" fill="white"/>
        <defs>
        <linearGradient id="paint0_linear_126_835" x1="3.5" y1="13" x2="25" y2="50" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4AD66D"/>
        <stop offset="1" stop-color="#277039"/>
        </linearGradient>
        </defs>
        </svg>
        `,
        url: "https://wa.me/1538497927",
        title: "+54 9 11 3849 7927"
    },
    {
        name: "Email",
        svg: `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" rx="25" fill="url(#paint0_linear_126_845)"/>
        <path d="M39.6845 15.5756C39.6845 15.5521 39.6845 15.5286 39.6786 15.4993C39.6786 15.4934 39.6786 15.4934 39.6786 15.4875C39.6727 15.464 39.6727 15.4405 39.661 15.417C39.661 15.4112 39.661 15.4112 39.6551 15.4053C39.6551 15.3994 39.6493 15.3877 39.6493 15.3818C39.6434 15.3642 39.6375 15.3524 39.6316 15.3348V15.3289C39.6199 15.3054 39.6081 15.2878 39.5964 15.2643C39.5964 15.2643 39.5964 15.2584 39.5905 15.2584C39.5788 15.2349 39.5611 15.2173 39.5494 15.1997L39.5435 15.1938C39.5259 15.1762 39.5142 15.1586 39.4965 15.141C39.4907 15.141 39.4907 15.1351 39.4848 15.1351C39.4672 15.1175 39.4495 15.1057 39.426 15.094C39.4202 15.094 39.4202 15.0881 39.4143 15.0881C39.3908 15.0764 39.3732 15.0646 39.3497 15.0529H39.3438C39.3203 15.0411 39.2968 15.0294 39.2733 15.0235C39.2498 15.0176 39.2263 15.0117 39.197 15.0059H39.1911C39.1676 15 39.1441 15 39.1206 15C39.1147 15 39.1147 15 39.1089 15C39.103 15 39.103 15 39.0971 15H10.9033C10.8974 15 10.8974 15 10.8915 15C10.8857 15 10.8857 15 10.8798 15C10.8563 15 10.8328 15.0059 10.8093 15.0059H10.8034C10.7799 15.0117 10.7564 15.0176 10.7271 15.0235C10.7036 15.0294 10.6801 15.0411 10.6566 15.0529H10.6507C10.6272 15.0646 10.6096 15.0764 10.5861 15.0881C10.5802 15.0881 10.5802 15.094 10.5744 15.094C10.5567 15.1057 10.5391 15.1233 10.5156 15.1351C10.5098 15.1351 10.5098 15.141 10.5039 15.141C10.4863 15.1586 10.4686 15.1762 10.4569 15.1938L10.451 15.1997C10.4334 15.2173 10.4216 15.2408 10.4099 15.2584C10.4099 15.2584 10.4099 15.2643 10.404 15.2643C10.3923 15.2819 10.3805 15.3054 10.3688 15.3289V15.3348C10.3629 15.3524 10.357 15.3642 10.3512 15.3818C10.3512 15.3877 10.3453 15.3994 10.3453 15.4053C10.3453 15.4112 10.3453 15.4112 10.3394 15.417C10.3335 15.4405 10.3277 15.464 10.3218 15.4875C10.3218 15.4934 10.3218 15.4934 10.3218 15.4993C10.3159 15.5286 10.3159 15.5521 10.3159 15.5756C10.3159 15.5756 10.3159 15.5756 10.3159 15.5815V33.6608V34.4126C10.3159 34.7357 10.5802 35 10.9033 35H39.0971C39.4202 35 39.6845 34.7357 39.6845 34.4126V33.6608V15.5756C39.6845 15.5815 39.6845 15.5815 39.6845 15.5756ZM11.4907 16.7974L17.3291 21.4258L21.2998 24.5742L11.4907 32.4332V16.7974ZM22.2513 25.326L24.6419 27.1762C24.6537 27.188 24.6713 27.1938 24.683 27.2056C24.8769 27.3289 25.1294 27.3289 25.3233 27.2056C25.335 27.1938 25.3526 27.188 25.3644 27.1762L27.755 25.326L38.3688 33.8253H11.6375L22.2513 25.326ZM28.7006 24.58L32.6713 21.4317L38.5097 16.8032V32.4391L28.7006 24.58ZM37.4114 16.1689L32.8651 19.7753L27.3967 24.116L25.0002 25.9662L22.6037 24.116L17.1353 19.7812L12.589 16.1747H37.4114V16.1689Z" fill="white"/>
        <defs>
        <linearGradient id="paint0_linear_126_845" x1="1.5" y1="15" x2="25" y2="50" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4AD66D"/>
        <stop offset="1" stop-color="#277039"/>
        </linearGradient>
        </defs>
        </svg>
        `,
        url: "mailto:garciaezequiel2022001@gmail.com",
        title: "garciaezequiel2022001@gmail.com"
    },
]