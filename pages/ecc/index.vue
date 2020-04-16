<template lang="html">
  <div class="page-wrap">
    <aside
      class="w-full md:w-73 md:fixed md:h-screen bg-white md:overflow-y-auto z-20 relative"
    >
      <!-- Branding -->
      <header class="flex justify-center flex-col items-center">
        <nuxt-link to="/">
          <base-logomark active class="mt-8 mb-0 w-20 h-20">
            <icon-calc />
          </base-logomark>
        </nuxt-link>
        <nuxt-link to="/" class="bottom-0 block w-full flex justify-center">
          <icon
            viewbox="0 0 512 112"
            class=" text-brand-600 fill-current w-24 h-24"
          >
            <icon-logotype />
          </icon>
        </nuxt-link>
      </header>

      <!-- Calculator -->
      <sidebar-collapse title="Curvature Calculator" class="">
        <header
          class="text-xs tracking-wider mb-6 mt-1 text-gray-950 group-hover:text-gray-950 transition ease-in-out duration-200 antialiased flex justify-between items-center"
        >
          <span class="uppercase cursor-pointer" @click="metric = !metric"
            >Units</span
          >
          <span class="text-xs lowercase text-gray-600">
            <span
              :class="{'text-brand-800 font-bold': !metric}"
              class="cursor-pointer mr-2"
              @click="metric = false"
              >imperial</span
            >
            <span
              :class="{'text-brand-800 font-bold': metric}"
              class="cursor-pointer"
              @click="metric = true"
              >Metric</span
            >
          </span>
        </header>
        <sidebar-collapse-input-header
          :unit="metric ? 'm' : 'ft'"
          title="Eyesight Height"
          identifier="H"
          class="mt-4"
        />
        <sidebar-collapse-input v-model.number="h0" class="pb-4" />
        <sidebar-collapse-input-header
          :unit="metric ? 'km' : 'mi'"
          title="Distance To Target"
          identifier="D"
        />
        <sidebar-collapse-input v-model.number="d0" class="pb-4" />
        <sidebar-collapse-input-header
          :unit="metric ? 'km' : 'mi'"
          title="Distance to Horizon"
          identifier="D1"
          class="mt-4"
        />
        <sidebar-collapse-result
          horizon
          :result="metric ? d1 : d1i"
          class="pb-4"
        />
        <sidebar-collapse-input-header
          :unit="metric ? 'm' : 'ft'"
          title="Target Hidden Height"
          identifier="H1"
          class="mt-1"
        />
        <sidebar-collapse-result :result="metric ? h1 : h1i" class="pb-4" />
      </sidebar-collapse>

      <!-- Diagram -->
      <sidebar-collapse title="Diagram" class="">
        <a ref="dl" class="">
          <header
            class="text-xs tracking-wider mb-0 mt-1 text-gray-950 group-hover:text-gray-950 transition ease-in-out duration-200 antialiased flex justify-between items-center"
          >
            <span class="uppercase cursor-pointer">Download</span>
            <span class="text-xs lowercase text-gray-600">
              <span class="text-brand-800 font-bold cursor-pointer">png</span>
            </span>
          </header>
        </a>
      </sidebar-collapse>

      <!-- Assumptions -->
      <sidebar-collapse title="Assumptions" class="">
        <ol class="list-decimal list-outside pl-3 text-xs">
          <li class="pb-01">Light travels in a straight line.</li>
          <li>The Earth is a sphere with a radius of 6371 km.</li>
        </ol>
      </sidebar-collapse>
    </aside>
    <!-- md:ml-73 md:w-sidebar -->
    <!-- pinchSpeed: 1.1, -->
    <!-- transformOrigin: {x: 0.5, y: 0.5},
          smoothScroll: true, -->
    <div
      class="diagram hidden md:flex w-full h-full absolute right-0 md:w-sidebar overflow-y-scroll md:overflow-y-hidden scrolling-touch"
    >
      <pan-zoom
        :options="{
          autocenter: true,
          bounds: false,
          minZoom: 0.5,
          maxZoom: 5,
          smoothScroll: true,
          transformOrigin: {x: 0.5, y: 0.5},
          beforeWheel: function(e) {
            // allow wheel-zoom only if altKey is pressed. Otherwise - ignore
            var shouldIgnore = !e.altKey
            return shouldIgnore
          }
        }"
        selector="#diagram"
        class="cursor-grab active:cursor-grabbing"
      >
        <!-- <diagram ref="svg" class="w-full h-full absolute outline-none" /> -->
        <svg
          ref="svg"
          width="1280px"
          height="282px"
          viewBox="0 0 1280 282"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="w-full h-full absolute outline-none"
        >
          <defs>
            <path
              id="path-1"
              d="M46.5321122,-2.26485497e-14 L50.5221617,14.8910675 L48.4252829,22.7167258 L42.3383546,-1.42108547e-14 L46.5321122,-1.42108547e-14 Z M50.7258698,-1.42108547e-14 L54.5122112,-1.42108547e-14 L52.6190405,7.06540921 L50.7258698,-1.0658141e-14 Z M38.1445969,-1.50990331e-14 L46.3284041,30.5423841 L44.2315252,38.3680424 L33.9508393,-1.0658141e-14 L38.1445969,-1.42108547e-14 Z M29.7570816,-1.33226763e-14 L46.4135355,62.1627321 L44.3166567,69.9883904 L25.563324,-1.77635684e-14 L29.7570816,-1.42108547e-14 Z M44.6458318,39.9142554 L47.3612676,40.6418542 L46.1010294,45.345127 L44.6458318,39.9142554 Z M47.2594356,49.6683577 L49.5949532,50.2895197 L48.5104143,54.3370738 L47.2594356,49.6683577 Z M23.1142481,6.51124089 L40.1608272,70.1299401 L35.6426813,68.9193066 L21.0173693,14.3368992 L23.1142481,6.51124089 Z M18.9204905,22.1625575 L31.1245354,67.708673 L26.6063894,66.4980395 L16.8236117,29.9882157 L18.9204905,22.1625575 Z M13.0213891,31.4494445 L22.0882435,65.2874059 L17.5700976,64.0767724 L10.5863387,38.0130293 L12.3903523,31.2803587 L13.0213891,31.4494445 Z M8.17555187,44.667167 L13.0519517,62.8661388 L8.53380576,61.6555053 L4.27321472,45.754763 L4.80652076,43.7644378 L8.17555187,44.667167 Z M2.1763359,53.5804213 L0.583434648,59.5252097 L4.01565984,60.4448717 L2.1763359,53.5804213 Z"
            ></path>
            <path
              id="path-3"
              d="M-1.3521095e-05,222.684209 C199.289628,148.525002 414.9174,108 640,108 C865.0826,108 1080.71037,148.525002 1280.00001,222.684209 L1280,288 L-4.54747351e-13,288 L-4.54747351e-13,222.684204 Z"
            ></path>
            <filter
              id="filter-4"
              x="-95.2%"
              y="-72.2%"
              width="290.5%"
              height="2127.8%"
              filterUnits="objectBoundingBox"
            >
              <feOffset
                dx="-7"
                dy="-14"
                in="SourceAlpha"
                result="shadowOffsetOuter1"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="15"
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              ></feGaussianBlur>
              <feColorMatrix
                values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.944435009 0"
                type="matrix"
                in="shadowBlurOuter1"
              ></feColorMatrix>
            </filter>
            <linearGradient
              id="linearGradient-5"
              x1="9.19428853%"
              y1="0%"
              x2="95.2137819%"
              y2="100%"
            >
              <stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop>
              <stop stop-color="#FFFFFF" offset="100%"></stop>
            </linearGradient>
            <rect
              id="path-6"
              x="0"
              y="4.12800851e-15"
              width="24"
              height="24"
              rx="9.29544879"
            ></rect>
            <filter
              id="filter-7"
              x="-35.4%"
              y="-35.4%"
              width="170.8%"
              height="170.8%"
              filterUnits="objectBoundingBox"
            >
              <feOffset
                dx="1"
                dy="2"
                in="SourceAlpha"
                result="shadowOffsetOuter1"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="1.5"
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              ></feGaussianBlur>
              <feColorMatrix
                values="0 0 0 0 0.133161008   0 0 0 0 0.220573323   0 0 0 0 0.424107143  0 0 0 0.196869339 0"
                type="matrix"
                in="shadowBlurOuter1"
                result="shadowMatrixOuter1"
              ></feColorMatrix>
              <feOffset
                dx="-1"
                dy="-2"
                in="SourceAlpha"
                result="shadowOffsetOuter2"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="1.5"
                in="shadowOffsetOuter2"
                result="shadowBlurOuter2"
              ></feGaussianBlur>
              <feColorMatrix
                values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 1 0"
                type="matrix"
                in="shadowBlurOuter2"
                result="shadowMatrixOuter2"
              ></feColorMatrix>
              <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
              </feMerge>
            </filter>
            <rect
              id="path-8"
              x="0"
              y="4.12800851e-15"
              width="24"
              height="24"
              rx="9.29544879"
            ></rect>
            <filter
              id="filter-9"
              x="-35.4%"
              y="-35.4%"
              width="170.8%"
              height="170.8%"
              filterUnits="objectBoundingBox"
            >
              <feOffset
                dx="1"
                dy="2"
                in="SourceAlpha"
                result="shadowOffsetOuter1"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="1.5"
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              ></feGaussianBlur>
              <feColorMatrix
                values="0 0 0 0 0.133161008   0 0 0 0 0.220573323   0 0 0 0 0.424107143  0 0 0 0.196869339 0"
                type="matrix"
                in="shadowBlurOuter1"
                result="shadowMatrixOuter1"
              ></feColorMatrix>
              <feOffset
                dx="-1"
                dy="-2"
                in="SourceAlpha"
                result="shadowOffsetOuter2"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="1.5"
                in="shadowOffsetOuter2"
                result="shadowBlurOuter2"
              ></feGaussianBlur>
              <feColorMatrix
                values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 1 0"
                type="matrix"
                in="shadowBlurOuter2"
                result="shadowMatrixOuter2"
              ></feColorMatrix>
              <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
              </feMerge>
            </filter>
            <rect
              id="path-10"
              x="0"
              y="4.84945444e-15"
              width="28"
              height="28"
              rx="10.9200006"
            ></rect>
            <filter
              id="filter-11"
              x="-39.3%"
              y="-39.3%"
              width="178.6%"
              height="178.6%"
              filterUnits="objectBoundingBox"
            >
              <feOffset
                dx="1"
                dy="2"
                in="SourceAlpha"
                result="shadowOffsetOuter1"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="2"
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              ></feGaussianBlur>
              <feColorMatrix
                values="0 0 0 0 0.133161008   0 0 0 0 0.220573323   0 0 0 0 0.424107143  0 0 0 0.196869339 0"
                type="matrix"
                in="shadowBlurOuter1"
                result="shadowMatrixOuter1"
              ></feColorMatrix>
              <feOffset
                dx="-1"
                dy="-2"
                in="SourceAlpha"
                result="shadowOffsetOuter2"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="2"
                in="shadowOffsetOuter2"
                result="shadowBlurOuter2"
              ></feGaussianBlur>
              <feColorMatrix
                values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 1 0"
                type="matrix"
                in="shadowBlurOuter2"
                result="shadowMatrixOuter2"
              ></feColorMatrix>
              <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
              </feMerge>
            </filter>
            <linearGradient
              id="linearGradient-12"
              x1="50%"
              y1="30.6624727%"
              x2="27.45535%"
              y2="130.786613%"
            >
              <stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop>
              <stop stop-color="#FFFFFF" offset="100%"></stop>
            </linearGradient>
            <path
              id="path-13"
              d="M284.752667,103.758188 C286.515834,103.758188 287.945219,105.131738 287.945219,106.826031 L287.945219,108.359952 C287.945219,110.054245 286.515834,111.427795 284.752667,111.427795 C282.989501,111.427795 281.560115,110.054245 281.560115,108.359952 L281.560115,106.826031 C281.560115,105.131738 282.989501,103.758188 284.752667,103.758188 Z M287.147081,111.427795 C289.791871,111.427795 291.93591,113.488082 291.93591,116.02956 L291.93591,126.00005 L289.541495,126.00005 L287.945219,143.026578 L281.560115,143.026578 L279.963839,126.00005 L277.569425,126.00005 L277.569425,116.02956 C277.569425,113.488082 279.713463,111.427795 282.358253,111.427795 L287.147081,111.427795 Z"
            ></path>
            <rect
              id="path-14"
              x="0"
              y="4.81600993e-15"
              width="28"
              height="28"
              rx="10.8446903"
            ></rect>
            <filter
              id="filter-15"
              x="-39.3%"
              y="-39.3%"
              width="178.6%"
              height="178.6%"
              filterUnits="objectBoundingBox"
            >
              <feOffset
                dx="1"
                dy="2"
                in="SourceAlpha"
                result="shadowOffsetOuter1"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="2"
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              ></feGaussianBlur>
              <feColorMatrix
                values="0 0 0 0 0.133161008   0 0 0 0 0.220573323   0 0 0 0 0.424107143  0 0 0 0.196869339 0"
                type="matrix"
                in="shadowBlurOuter1"
                result="shadowMatrixOuter1"
              ></feColorMatrix>
              <feOffset
                dx="-1"
                dy="-2"
                in="SourceAlpha"
                result="shadowOffsetOuter2"
              ></feOffset>
              <feGaussianBlur
                stdDeviation="2"
                in="shadowOffsetOuter2"
                result="shadowBlurOuter2"
              ></feGaussianBlur>
              <feColorMatrix
                values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 1 0"
                type="matrix"
                in="shadowBlurOuter2"
                result="shadowMatrixOuter2"
              ></feColorMatrix>
              <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          <g
            id="diagram"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g transform="translate(0.000000, -6.000000)">
              <g>
                <path
                  id="target"
                  d="M1163.37858,144.926567 L1159.76698,144.926567 L1159.76698,57.1301898 L1156.71565,57.1301898 L1156.71565,49.8303632 L1152.38862,49.8303632 L1152.38862,42.5132794 L1150.31992,42.5132794 C1149.70793,41.0464112 1148.20812,34.1089874 1147.99263,29.9240986 C1147.77714,25.4976081 1147.92367,26.1188699 1147.98401,25.2301203 C1148.07883,24.954004 1148.12192,24.6520017 1148.12192,24.3499994 C1148.12192,23.1592476 1147.35478,22.1496971 1146.31181,21.8131803 L1146.31181,5.28071258 L1145.32056,3.22709707 L1144.25173,5.28071258 L1144.25173,22.0634107 C1143.47597,22.5207285 1142.95018,23.3663348 1142.95018,24.358628 C1142.95018,24.5570867 1142.97603,24.764174 1143.02775,24.9626326 C1142.94156,24.9626326 1143.20876,24.6261158 1142.94156,29.91547 C1142.75192,34.1089874 1141.2435,41.0464112 1140.63151,42.5132794 L1138.54557,42.5132794 L1138.54557,49.8303632 L1133.94271,49.8303632 L1133.94271,57.1301898 L1131.12411,57.1301898 L1131.12411,144.935196 L1127.17634,144.935196 L1127.17634,158.95673 L1123.08204,158.95673 L1123.08204,175.273482 L1168.03316,175.273482 L1168.03316,153.667376 L1163.37858,153.676004 L1163.37858,144.926567 Z"
                  fill="#1E2125"
                  fill-rule="nonzero"
                  transform="translate(1145.557599, 89.250289) rotate(15.000000) translate(-1145.557599, -89.250289) "
                ></path>
                <g
                  id="target-hidden"
                  transform="translate(1101.000000, 107.000000)"
                >
                  <path
                    id="back-color"
                    d="M24.8589298,0 L54.5122112,0 L43.8727253,39.7071021 L47.3612676,40.6418542 L45.0967465,49.0931618 L49.5949532,50.2895197 L44.0028815,71.1594154 L0.583434648,59.5252097 L4.80652076,43.7644378 L8.76131218,44.824121 L12.3903523,31.2803587 L16.2036038,32.3021164 L24.8589298,2.66453526e-15 Z"
                    fill="#16D8CE"
                  ></path>
                  <mask id="mask-2" fill="white">
                    <use xlink:href="#path-1"></use>
                  </mask>
                  <use
                    id="front-color"
                    fill="#0DCAC0"
                    fill-rule="nonzero"
                    xlink:href="#path-1"
                  ></use>
                </g>
                <g id="globe">
                  <use
                    fill="black"
                    fill-opacity="1"
                    filter="url(#filter-4)"
                    xlink:href="#path-3"
                  ></use>
                  <use
                    fill="#F6F7FA"
                    fill-rule="evenodd"
                    xlink:href="#path-3"
                  ></use>
                </g>
                <path
                  id="h1-arrow"
                  d="M1177.75764,173.014199 L1162.34321,117.518218 L1164.30735,116.955011 L1160.02206,109.161479 L1160.02172,109.16086 L1158.87218,107.070225 L1159.50104,118.333198 L1161.62224,117.724953 L1177.03667,173.220935 L1174.97767,173.811345 L1180.41283,183.696131 L1179.78397,172.433159 L1177.75764,173.014199 Z"
                  fill="#7F8A9A"
                  fill-rule="nonzero"
                  transform="translate(1169.642508, 145.383178) scale(-1, 1) translate(-1169.642508, -145.383178) "
                ></path>
                <g
                  id="h1-icon-s"
                  transform="translate(1183.000000, 135.000000)"
                >
                  <g>
                    <use
                      fill="black"
                      fill-opacity="1"
                      filter="url(#filter-7)"
                      xlink:href="#path-6"
                    ></use>
                    <use
                      fill="url(#linearGradient-5)"
                      fill-rule="evenodd"
                      xlink:href="#path-6"
                    ></use>
                    <use
                      fill="#0DCAC0"
                      fill-rule="evenodd"
                      xlink:href="#path-6"
                    ></use>
                  </g>
                  <path
                    id="H1"
                    d="M12.4289916,16 L10.5674076,16 L10.5674076,12.7568966 L7.80970285,12.7568966 L7.80970285,16 L5.93745069,16 L5.93745069,8.23362069 L7.80970285,8.23362069 L7.80970285,11.3167026 L10.5674076,11.3167026 L10.5674076,8.23362069 L12.4289916,8.23362069 L12.4289916,16 Z M17.4856727,16 L15.6827632,16 L15.6827632,10.2605603 L13.911858,10.7779634 L13.911858,9.41244612 L17.3203171,8.23362069 L17.4856727,8.23362069 L17.4856727,16 Z"
                    fill="#FFFFFF"
                  ></path>
                </g>
                <g id="d1-arrow" transform="translate(282.000000, 106.000000)">
                  <path
                    d="M358.375,0.5 L358.375,73.5"
                    stroke="#BEC9DA"
                    stroke-width="0.75"
                    stroke-linecap="square"
                  ></path>
                  <path
                    d="M0.375,0.5 L0.375,73.5"
                    stroke="#BEC9DA"
                    stroke-width="0.75"
                    stroke-linecap="square"
                  ></path>
                  <path
                    d="M358.75,74 L0,74"
                    stroke="#BEC9DA"
                    stroke-width="0.75"
                  ></path>
                  <polygon
                    fill="#7F8A9A"
                    transform="translate(353.250000, 74.000000) rotate(90.000000) translate(-353.250000, -74.000000) "
                    points="353.25 68.5 355.75 79.5 350.75 79.5"
                  ></polygon>
                  <polygon
                    fill="#7F8A9A"
                    transform="translate(5.500000, 74.000000) scale(-1, 1) rotate(90.000000) translate(-5.500000, -74.000000) "
                    points="5.5 68.5 8 79.5 3 79.5"
                  ></polygon>
                </g>
                <g
                  id="d-arrow"
                  transform="translate(704.500000, 69.500000) scale(1, -1) translate(-704.500000, -69.500000) translate(282.000000, 31.000000)"
                >
                  <path
                    d="M844.375,0.5 L844.375,73.5"
                    stroke="#BEC9DA"
                    stroke-width="0.75"
                    stroke-linecap="square"
                  ></path>
                  <path
                    d="M0.375,0.5 L0.375,73.5"
                    stroke="#BEC9DA"
                    stroke-width="0.75"
                    stroke-linecap="square"
                  ></path>
                  <path
                    d="M838.75,74 L0,74"
                    stroke="#BEC9DA"
                    stroke-width="0.75"
                  ></path>
                  <polygon
                    fill="#7F8A9A"
                    transform="translate(5.500000, 74.000000) scale(-1, 1) rotate(90.000000) translate(-5.500000, -74.000000) "
                    points="5.5 68.5 8 79.5 3 79.5"
                  ></polygon>
                  <polygon
                    fill="#7F8A9A"
                    transform="translate(839.500000, 74.000000) rotate(90.000000) translate(-839.500000, -74.000000) "
                    points="839.5 68.5 842 79.5 837 79.5"
                  ></polygon>
                </g>
                <g id="d1-icon-s" transform="translate(447.000000, 168.000000)">
                  <g id="Background-Copy-4">
                    <use
                      fill="black"
                      fill-opacity="1"
                      filter="url(#filter-9)"
                      xlink:href="#path-8"
                    ></use>
                    <use
                      fill="url(#linearGradient-5)"
                      fill-rule="evenodd"
                      xlink:href="#path-8"
                    ></use>
                    <use
                      fill="#6342FF"
                      fill-rule="evenodd"
                      xlink:href="#path-8"
                    ></use>
                  </g>
                  <text
                    font-family="Roboto-Black, Roboto"
                    font-size="10.9241379"
                    font-weight="700"
                    fill="#FFFFFF"
                  >
                    <tspan x="5.65741298" y="16">D1</tspan>
                  </text>
                </g>
                <g id="d-icon-s" transform="translate(697.000000, 18.000000)">
                  <g>
                    <use
                      fill="black"
                      fill-opacity="1"
                      filter="url(#filter-11)"
                      xlink:href="#path-10"
                    ></use>
                    <use
                      fill="url(#linearGradient-5)"
                      fill-rule="evenodd"
                      xlink:href="#path-10"
                    ></use>
                    <use
                      fill="#FFFFFF"
                      fill-rule="evenodd"
                      xlink:href="#path-10"
                    ></use>
                  </g>
                  <path
                    d="M10.9512715,19 L10.9512715,9.87630208 L13.890155,9.87630208 C14.6964198,9.87630208 15.4212119,10.0590666 16.0645527,10.4246012 C16.7078936,10.7901358 17.2102351,11.3060541 17.5715921,11.9723714 C17.9329492,12.6386888 18.1157138,13.3854125 18.1198913,14.2125651 L18.1198913,14.6324056 C18.1198913,15.4679132 17.9433929,16.2167257 17.590391,16.8788656 C17.237389,17.5410054 16.7402694,18.0590123 16.0990173,18.432902 C15.4577651,18.8067917 14.7423725,18.9958225 13.9528177,19 L10.9512715,19 Z M13.1507344,11.5744629 L13.1507344,17.3081055 L13.9152201,17.3081055 C14.5460283,17.3081055 15.0306155,17.0835662 15.3689961,16.6344808 C15.7073767,16.1853954 15.8765645,15.5180437 15.8765645,14.6324056 L15.8765645,14.2376302 C15.8765645,13.3561696 15.7073767,12.691951 15.3689961,12.2449544 C15.0306155,11.7979578 14.5376734,11.5744629 13.890155,11.5744629 L13.1507344,11.5744629 Z"
                    fill="#1E2125"
                  ></path>
                </g>
                <polyline
                  id="horizon-line"
                  stroke="#BEC9DA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-dasharray="3,5"
                  transform="translate(640.000000, 107.500000) rotate(90.000000) translate(-640.000000, -107.500000) "
                  points="639.5 -532.5 639.5 286.61466 639.5 747.5"
                ></polyline>
                <path
                  d="M617.636719,99 L616.535156,99 L617.220703,95.0566406 L613.054688,95.0566406 L612.369141,99 L611.267578,99 L612.75,90.46875 L613.851562,90.46875 L613.212891,94.1367188 L617.373047,94.1367188 L618.011719,90.46875 L619.119141,90.46875 L617.636719,99 Z M623.751953,99.1171875 C623.208982,99.1054687 622.737307,98.9746106 622.336914,98.7246094 C621.936521,98.4746081 621.621095,98.1064477 621.390625,97.6201172 C621.160155,97.1337866 621.033203,96.5878937 621.009766,95.9824219 C620.986328,95.5097633 621.039062,94.9257847 621.167969,94.2304688 C621.296876,93.5351528 621.51953,92.9082059 621.835938,92.3496094 C622.152345,91.7910128 622.537107,91.3437517 622.990234,91.0078125 C623.603519,90.5546852 624.30273,90.3359374 625.087891,90.3515625 C625.919926,90.3671876 626.576169,90.6552706 627.056641,91.2158203 C627.537112,91.77637 627.794922,92.5351515 627.830078,93.4921875 C627.845703,93.9023458 627.803711,94.423825 627.704102,95.0566406 C627.604492,95.6894563 627.426759,96.277341 627.170898,96.8203125 C626.915038,97.363284 626.589846,97.8183575 626.195313,98.1855469 C625.507809,98.8261751 624.693364,99.1367188 623.751953,99.1171875 Z M626.746094,93.7617188 C626.769531,92.9921837 626.634767,92.3955099 626.341797,91.9716797 C626.048827,91.5478494 625.613284,91.3281251 625.035156,91.3125 C624.511716,91.2968749 624.043947,91.4374985 623.631836,91.734375 C623.219725,92.0312515 622.881837,92.475583 622.618164,93.0673828 C622.354491,93.6591826 622.1875,94.4081986 622.117188,95.3144531 L622.099609,95.6953125 C622.076172,96.4609413 622.212889,97.0605447 622.509766,97.4941406 C622.806642,97.9277365 623.238278,98.1523437 623.804688,98.1679688 C624.542972,98.1875001 625.155271,97.9209012 625.641602,97.3681641 C626.127932,96.8154269 626.451171,96.0390675 626.611328,95.0390625 C626.689454,94.5468725 626.734375,94.1210955 626.746094,93.7617188 Z M633.353516,95.5488281 L631.384766,95.5488281 L630.787109,99 L629.679688,99 L631.162109,90.46875 L633.728516,90.4746094 C634.623051,90.4785156 635.304685,90.7050759 635.773438,91.1542969 C636.24219,91.6035179 636.439453,92.2148399 636.365234,92.9882813 C636.322265,93.5234402 636.127931,93.9941386 635.782227,94.4003906 C635.436522,94.8066427 634.976565,95.1132802 634.402344,95.3203125 L635.726562,98.9238281 L635.720703,99 L634.548828,99 L633.353516,95.5488281 Z M631.542969,94.6289063 L633.160156,94.6347656 C633.722659,94.6347656 634.197264,94.4853531 634.583984,94.1865234 C634.970705,93.8876938 635.197265,93.4882838 635.263672,92.9882813 C635.322266,92.4999976 635.224611,92.1171889 634.970703,91.8398438 C634.716796,91.5624986 634.330081,91.4160157 633.810547,91.4003906 L632.105469,91.3945313 L631.542969,94.6289063 Z M639.087891,99 L637.992188,99 L639.474609,90.46875 L640.570312,90.46875 L639.087891,99 Z M643.158203,98.0800781 L647.857422,98.0800781 L647.693359,99 L641.664062,99 L641.822266,98.0976563 L647.482422,91.3945313 L643.052734,91.3945313 L643.216797,90.46875 L648.994141,90.46875 L648.841797,91.3535156 L643.158203,98.0800781 Z M653.134766,99.1171875 C652.591794,99.1054687 652.120119,98.9746106 651.719727,98.7246094 C651.319334,98.4746081 651.003907,98.1064477 650.773438,97.6201172 C650.542968,97.1337866 650.416016,96.5878937 650.392578,95.9824219 C650.369141,95.5097633 650.421874,94.9257847 650.550781,94.2304688 C650.679688,93.5351528 650.902342,92.9082059 651.21875,92.3496094 C651.535158,91.7910128 651.91992,91.3437517 652.373047,91.0078125 C652.986331,90.5546852 653.685543,90.3359374 654.470703,90.3515625 C655.302739,90.3671876 655.958982,90.6552706 656.439453,91.2158203 C656.919924,91.77637 657.177734,92.5351515 657.212891,93.4921875 C657.228516,93.9023458 657.186524,94.423825 657.086914,95.0566406 C656.987304,95.6894563 656.809572,96.277341 656.553711,96.8203125 C656.29785,97.363284 655.972658,97.8183575 655.578125,98.1855469 C654.890622,98.8261751 654.076177,99.1367188 653.134766,99.1171875 Z M656.128906,93.7617188 C656.152344,92.9921837 656.01758,92.3955099 655.724609,91.9716797 C655.431639,91.5478494 654.996097,91.3281251 654.417969,91.3125 C653.894529,91.2968749 653.42676,91.4374985 653.014648,91.734375 C652.602537,92.0312515 652.26465,92.475583 652.000977,93.0673828 C651.737303,93.6591826 651.570313,94.4081986 651.5,95.3144531 L651.482422,95.6953125 C651.458984,96.4609413 651.595702,97.0605447 651.892578,97.4941406 C652.189455,97.9277365 652.621091,98.1523437 653.1875,98.1679688 C653.925785,98.1875001 654.538084,97.9209012 655.024414,97.3681641 C655.510745,96.8154269 655.833984,96.0390675 655.994141,95.0390625 C656.072266,94.5468725 656.117187,94.1210955 656.128906,93.7617188 Z M665.4375,99 L664.371094,99 L661.324219,92.3789063 L660.175781,99 L659.068359,99 L660.550781,90.46875 L661.617188,90.46875 L664.669922,97.1191406 L665.824219,90.46875 L666.919922,90.46875 L665.4375,99 Z"
                  fill="#7F8A9A"
                ></path>
                <g
                  fill-rule="nonzero"
                  transform="translate(284.752667, 123.392383) rotate(-8.000000) translate(-284.752667, -123.392383) "
                >
                  <use
                    fill="#1E2125"
                    fill-rule="evenodd"
                    xlink:href="#path-13"
                  ></use>
                  <use
                    fill="url(#linearGradient-12)"
                    fill-rule="evenodd"
                    xlink:href="#path-13"
                  ></use>
                </g>
                <path
                  d="M266.86251,135.609378 L262.701033,117.640403 L264.692057,117.217197 L259.95966,106.977353 L259.801319,118.256756 L261.967301,117.796362 L266.128779,135.765337 L264.056055,136.205908 L268.788453,146.445753 L268.946793,135.16635 L266.86251,135.609378 Z"
                  fill="#7F8A9A"
                  fill-rule="nonzero"
                ></path>
                <g id="h-icon-s" transform="translate(222.000000, 116.000000)">
                  <g>
                    <use
                      fill="black"
                      fill-opacity="1"
                      filter="url(#filter-15)"
                      xlink:href="#path-14"
                    ></use>
                    <use
                      fill="url(#linearGradient-5)"
                      fill-rule="evenodd"
                      xlink:href="#path-14"
                    ></use>
                    <use
                      fill="#FFFFFF"
                      fill-rule="evenodd"
                      xlink:href="#path-14"
                    ></use>
                  </g>
                  <polygon
                    fill="#1E2125"
                    points="18.190765 19 16.018917 19 16.018917 15.2163793 12.8015948 15.2163793 12.8015948 19 10.6173006 19 10.6173006 9.93922414 12.8015948 9.93922414 12.8015948 13.536153 16.018917 13.536153 16.018917 9.93922414 18.190765 9.93922414"
                  ></polygon>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </pan-zoom>
    </div>
  </div>
</template>

<script>
import BaseLogomark from '~/components/icons/brand/BaseLogomark'
import Icon from '~/components/icons/Icon'
import IconCalc from '~/components/icons/brand/IconCalc'
import IconLogotype from '~/components/icons/brand/IconLogotype'
// import Diagram from '~/components/Diagram'
import SidebarCollapse from '~/components/SidebarCollapse'
import SidebarCollapseInput from '~/components/SidebarCollapseInput'
import SidebarCollapseInputHeader from '~/components/SidebarCollapseInputHeader'
import SidebarCollapseResult from '~/components/SidebarCollapseResult'

export default {
  components: {
    BaseLogomark,
    Icon,
    IconCalc,
    IconLogotype,
    // Diagram,
    SidebarCollapse,
    SidebarCollapseInput,
    SidebarCollapseInputHeader,
    SidebarCollapseResult
  },
  data() {
    return {
      title: 'Earth Curvature Calculator',
      description:
        'Simple, accurate, and beautiful Earth Curvature Calculator.',
      poster: 'https://horizzn.com/images/horizzn-meta-poster-ecc.png',
      metric: true,
      earthRadius: 6371,
      earthRadiusImperial: 3958.75585149,
      feetPerMeter: 3.2808399000000001422,
      feetPerMile: 0.000189393939393939,
      milesPerKilometer: 0.6213711920000000166,
      h0: 0,
      d0: 0,
      h0i: 0,
      d0i: 0
    }
  },
  computed: {
    d1() {
      // a = √[(r + h)² - r²]
      if (this.h0 >= 0.000000001) {
        return Math.sqrt(
          (this.earthRadius + this.h0 * 0.001) ** 2 - this.earthRadius ** 2
        ).toFixed(8)
        // .slice(0, 7)
      } else {
        return '0'
      }
    },
    h1() {
      // x = √(a² - 2ad + d² + r²) - r
      if (this.d0 > this.d1) {
        return (
          (Math.sqrt(
            this.d1 ** 2 -
              2 * this.d1 * this.d0 +
              this.d0 ** 2 +
              this.earthRadius ** 2
          ) -
            this.earthRadius) *
          1000
        ).toFixed(6)
        // .slice(0, 7) || "0"
      } else {
        return '0'
      }
    },
    d1i() {
      // a = √[(r + h)² - r²]
      if (this.h0 >= 0.000000001) {
        return Math.sqrt(
          (this.earthRadiusImperial + this.h0 * this.feetPerMile) ** 2 -
            this.earthRadiusImperial ** 2
        ).toFixed(12)
      } else {
        return '0'
      }
    },
    h1i() {
      // x = √(a² - 2ad + d² + r²) - r
      if (this.d0 > this.d1i) {
        return (
          (
            (Math.sqrt(
              this.d1i ** 2 -
                2 * this.d1i * this.d0 +
                this.d0 ** 2 +
                this.earthRadiusImperial ** 2
            ) -
              this.earthRadiusImperial) /
            this.feetPerMile
          ).toFixed(12) || '0'
        )
      } else {
        return '0'
      }
    }
  },
  mounted() {
    this.saveDiagram()
  },
  methods: {
    saveDiagram() {
      const svg = this.$refs.svg
      const dl = this.$refs.dl
      const svgData = new XMLSerializer().serializeToString(svg)
      const blob = new Blob([svgData], {type: 'image/svg+xml;charset=utf-8'})
      const url = window.URL.createObjectURL(blob)
      const img = new Image()
      img.width = 1280 * 2
      img.height = 282 * 2
      img.onload = function() {
        const canvas = document.createElement('canvas')
        canvas.width = 1480 * 2
        canvas.height = 482 * 2

        const ctx = canvas.getContext('2d')
        ctx.fillStyle = '#F6F7FB'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 200, 200, 1280 * 2, 282 * 2)

        window.URL.revokeObjectURL(url)
        const canvasdata = canvas.toDataURL('image/png')
        dl.download = 'Horizzn-Earth-Curvature-Diagram.png'
        dl.href = canvasdata
      }
      img.src = url
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        // Open Graph / Facebook
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.$nuxt.$route.path
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Horizzn° | ' + this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.poster
        },
        // Twitter
        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: this.$nuxt.$route.path
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'Horizzn° | ' + this.title
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: this.poster
        }
      ]
    }
  }
}
</script>

<style lang="postcss">
aside {
  box-shadow: 1px 0 2px 0 rgba(31, 33, 38, 0.08);
}
</style>
