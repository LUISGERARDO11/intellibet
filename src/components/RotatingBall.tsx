"use client"; // Agrega esta línea al inicio del archivo

import React, { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { ReactSVG } from 'react-svg';

const RotatingBall: React.FC = () => {
    const [rotation, api] = useSpring(() => ({
        from: { rotate: 0 },
        config: { duration: 4000 },
      }));
    
      useEffect(() => {
        api.start({ to: { rotate: 360 }, loop: true });
      }, [api]);
    
      const fillColor =  '#000';
    
      return (
        <animated.div style={{ transform: rotation.rotate.to(r => `rotate(${r}deg)`) }}>
          <svg width={120} height={120} viewBox="0 0 1280 1278" style={{ fill: fillColor }}>
            <g transform="translate(0.050000,1278.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M6165 12774 c-335 -11 -606 -36 -872 -79 -1435 -233 -2811 -1036
-3779 -2205 -235 -285 -466 -606 -624 -870 -496 -825 -782 -1736 -872 -2770
-19 -218 -16 -812 5 -1040 70 -754 225 -1351 532 -2051 412 -940 1087 -1790
1938 -2442 758 -581 1626 -990 2547 -1201 388 -89 655 -111 1320 -111 698 1
1163 50 1695 180 584 143 1252 430 1805 775 579 360 1154 884 1604 1459 762
973 1223 2155 1317 3371 17 216 17 908 1 1090 -63 701 -209 1317 -457 1929
-376 927 -934 1720 -1670 2371 -195 173 -235 206 -415 342 -931 702 -2016
1120 -3200 1233 -159 16 -658 26 -875 19z m-19 -194 c88 -6 279 -15 425 -20
794 -28 1063 -49 1219 -96 188 -56 251 -166 188 -329 -25 -67 -41 -79 -128
-100 -162 -38 -322 -31 -670 30 -107 19 -229 39 -270 44 -41 6 -111 18 -155
26 -173 31 -355 19 -770 -52 -198 -33 -238 -37 -405 -38 -219 0 -293 13 -421
78 -98 49 -99 51 -44 163 118 242 432 332 1031 294z m-1392 -312 c161 -162
183 -330 71 -551 -70 -137 -163 -256 -439 -555 -213 -232 -288 -327 -375 -479
-118 -206 -296 -367 -536 -483 -192 -93 -363 -146 -855 -265 -267 -65 -445
-120 -574 -177 -79 -36 -95 -40 -151 -36 -77 5 -127 36 -180 112 -73 106 -115
297 -95 436 12 84 14 90 93 200 240 336 595 666 1097 1016 197 138 292 199
395 254 55 30 177 99 270 153 358 209 509 288 678 351 158 59 318 91 471 95
l58 1 72 -72z m3836 -60 c252 -80 542 -206 793 -344 310 -171 673 -409 822
-539 39 -34 185 -153 325 -266 470 -376 644 -575 732 -834 51 -147 49 -365 -4
-548 -16 -55 -74 -112 -128 -127 -41 -12 -51 -10 -120 15 -41 15 -300 103
-575 195 -599 201 -790 279 -1022 416 -211 124 -421 305 -487 417 -58 99 -147
213 -346 442 -375 433 -473 598 -474 800 -1 81 2 97 30 155 40 83 98 148 193
216 88 62 72 62 261 2z m-1930 -264 c118 -7 298 -19 400 -24 234 -14 298 -23
404 -59 196 -67 361 -177 557 -371 160 -159 230 -246 472 -584 226 -315 305
-420 388 -519 56 -65 68 -87 78 -134 44 -223 -36 -465 -249 -748 -89 -118
-194 -238 -410 -470 -224 -240 -282 -306 -356 -404 -59 -78 -59 -79 -114 -85
-30 -4 -629 -10 -1330 -15 l-1275 -8 -80 40 c-433 215 -802 651 -1168 1383
l-86 172 53 114 c229 499 655 1049 1120 1447 147 126 274 180 548 235 272 55
556 63 1048 30z m-3081 -2004 c170 -47 308 -150 467 -349 107 -133 191 -265
389 -612 164 -286 238 -405 311 -501 l44 -56 -74 -234 c-173 -545 -478 -1415
-752 -2141 -77 -202 -254 -367 -504 -470 -136 -56 -264 -90 -681 -182 -202
-44 -344 -83 -444 -123 -101 -39 -148 -45 -211 -27 -168 49 -334 170 -490 357
-129 155 -216 296 -509 828 -59 107 -145 252 -191 322 -97 146 -94 133 -69
370 62 582 226 1116 530 1718 46 91 102 204 124 252 163 346 502 560 1128 713
514 125 654 154 758 154 72 1 121 -5 174 -19z m6089 -50 c193 -39 325 -92 792
-320 366 -178 422 -203 565 -245 50 -14 96 -30 104 -34 23 -12 205 -316 300
-501 196 -383 341 -800 421 -1207 51 -260 51 -312 -5 -534 -71 -282 -201 -558
-478 -1014 -225 -369 -345 -573 -404 -682 l-54 -102 -53 -6 c-53 -7 -239 11
-266 25 -73 38 -355 116 -660 181 -490 106 -719 186 -926 326 -96 65 -241 295
-334 528 -67 168 -107 305 -214 730 -82 322 -161 565 -248 765 -68 153 -87
226 -95 352 -10 166 25 313 118 500 89 178 165 281 492 668 110 129 227 273
261 320 82 113 126 154 221 201 141 70 286 85 463 49z m-8161 -26 c44 -33 71
-81 78 -139 24 -185 -133 -573 -363 -900 -167 -238 -253 -480 -337 -950 -99
-552 -140 -706 -244 -920 -59 -121 -149 -252 -212 -312 -19 -17 -61 -47 -94
-67 l-60 -36 -37 37 c-60 59 -81 119 -86 254 -6 151 10 245 103 628 41 168 79
342 84 386 11 88 137 487 247 783 189 507 416 905 684 1196 l64 68 72 -4 c54
-2 80 -9 101 -24z m10238 -264 c96 -172 278 -538 348 -700 326 -757 488 -1409
527 -2125 11 -191 5 -475 -9 -475 -15 0 -153 135 -196 192 -165 219 -255 467
-385 1053 -52 236 -100 414 -146 542 -24 67 -44 126 -44 132 0 47 -106 294
-251 583 -291 581 -291 826 -2 943 32 13 61 21 65 17 3 -4 46 -77 93 -162z
m-4200 -1219 c215 -57 371 -182 467 -376 14 -27 37 -106 52 -174 44 -197 114
-433 275 -921 214 -650 272 -854 319 -1122 l19 -108 -106 -98 c-255 -237 -527
-460 -1141 -937 -239 -186 -511 -399 -605 -475 -201 -161 -222 -175 -304 -196
-72 -18 -135 -13 -221 19 -110 40 -195 98 -374 256 -417 370 -476 413 -904
677 -152 94 -317 199 -367 234 -259 183 -434 369 -535 570 -70 140 -70 118 14
356 41 115 124 351 185 524 170 488 277 789 351 980 43 113 69 198 74 239 22
194 121 365 261 450 177 107 398 130 985 100 421 -22 528 -21 790 5 319 32
638 31 765 -3z m4588 -1744 c312 -401 479 -915 439 -1353 -19 -208 -30 -248
-175 -664 -207 -593 -283 -783 -427 -1075 -153 -308 -314 -556 -483 -737 -55
-60 -69 -70 -121 -83 -204 -51 -407 -14 -516 95 -23 23 -56 72 -73 108 -31 65
-32 72 -32 197 1 112 5 147 32 255 53 208 68 312 108 755 14 154 32 334 41
400 49 383 147 684 293 907 72 110 130 221 236 458 191 425 284 582 416 704
65 60 175 129 191 120 4 -3 36 -42 71 -87z m-11339 -116 c75 -37 186 -135 265
-235 76 -96 176 -251 335 -521 81 -137 174 -286 207 -330 133 -179 213 -386
256 -659 14 -87 18 -169 17 -376 -1 -236 -5 -309 -42 -665 -22 -220 -44 -456
-48 -524 l-7 -123 -61 -29 c-185 -88 -378 -73 -550 42 -145 97 -289 276 -401
499 -72 144 -97 210 -159 422 -30 101 -100 316 -155 478 -219 646 -275 882
-287 1220 -7 190 8 336 52 499 26 97 29 102 93 168 125 130 216 175 341 171
62 -3 88 -9 144 -37z m8421 -1016 c133 -22 254 -55 574 -160 288 -93 459 -138
581 -151 55 -6 75 -13 125 -49 236 -167 334 -445 296 -845 -17 -178 -27 -236
-131 -743 -49 -243 -70 -399 -70 -521 0 -71 -6 -115 -25 -181 -112 -385 -380
-691 -911 -1038 -171 -111 -732 -442 -814 -479 -193 -88 -546 -83 -916 12
-141 37 -270 78 -624 202 -157 55 -350 119 -430 143 l-145 44 -66 69 c-46 48
-80 95 -108 153 -106 217 -119 452 -56 1014 36 319 48 497 40 603 l-6 93 64
77 c84 99 296 306 417 406 103 86 362 280 560 421 389 277 588 437 821 662
135 129 168 156 247 196 49 26 126 56 169 66 97 24 281 27 408 6z m-5101 -82
c908 -653 1297 -938 1601 -1171 99 -76 214 -157 255 -181 102 -60 233 -193
282 -286 54 -104 75 -163 98 -276 33 -163 39 -326 24 -729 -10 -255 -11 -408
-5 -506 17 -246 -12 -348 -131 -461 -89 -84 -244 -150 -451 -193 -54 -11 -207
-36 -340 -55 -360 -52 -544 -93 -647 -145 -35 -17 -141 -45 -295 -75 -44 -9
-142 -19 -217 -22 -233 -10 -335 17 -603 156 -209 108 -404 232 -608 385 -256
191 -412 330 -718 636 l-277 276 -32 100 c-95 297 -131 643 -111 1069 11 230
16 292 57 704 l19 183 62 64 c243 249 630 412 1223 515 107 18 638 95 679 98
8 1 69 -38 135 -86z m-2332 -2565 c108 -51 212 -139 413 -347 99 -102 286
-292 415 -421 269 -270 328 -314 655 -490 432 -234 556 -312 681 -436 141
-139 223 -300 249 -491 6 -47 5 -53 -17 -67 -23 -15 -32 -14 -139 20 -511 162
-1037 453 -1529 848 -333 267 -736 673 -1049 1056 l-110 135 32 58 c37 68 119
148 168 165 60 20 151 8 231 -30z m9233 -319 c84 -15 235 -87 235 -111 0 -22
-253 -303 -444 -493 -585 -584 -1189 -982 -1996 -1318 -80 -33 -181 -75 -225
-93 -44 -19 -97 -34 -117 -34 -36 0 -37 1 -49 54 -6 30 -10 93 -7 144 4 79 9
99 42 166 76 154 229 273 556 433 427 208 518 256 595 312 44 33 105 74 135
91 99 58 220 161 424 358 401 389 549 484 772 501 11 0 47 -4 79 -10z m-4525
-944 c264 -12 502 -69 1085 -259 160 -51 329 -106 377 -120 48 -15 108 -38
133 -53 74 -41 151 -118 181 -180 22 -48 26 -66 22 -132 -2 -65 -9 -89 -41
-153 -111 -226 -454 -455 -781 -522 -92 -19 -254 -21 -322 -3 -41 11 -70 11
-160 0 -60 -6 -212 -17 -337 -23 -190 -10 -265 -9 -455 4 -125 9 -310 20 -412
26 -510 29 -818 92 -1064 216 -195 98 -298 185 -359 301 -90 173 -90 292 0
393 117 130 292 190 817 281 351 60 423 76 591 134 72 24 177 54 234 65 101
20 299 39 351 34 14 -2 77 -6 140 -9z"/>
              </g>
            </svg>
          </animated.div>
        );
};

export default RotatingBall;