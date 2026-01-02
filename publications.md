<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ahmed E. Mansour – Publications</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />

  <!-- Main stylesheet -->
  <link rel="stylesheet" href="style.css" />

  <!-- Header loader -->
  <script type="module" src="header-loader.js"></script>

  <style>
    .pub-categories { display: flex; gap: 1rem; margin-bottom: 1rem; }
    .pub-categories button { background: none; border: none; font-size: 1rem; padding: 0.5rem 1rem; cursor: pointer; }
    .pub-categories button.active { border-bottom: 3px solid #333; font-weight: bold; }
    .pub-category-content { display: none; }
    .pub-category-content.active { display: block; }
    .year-section .pub-list { display: none; }
    .year-section .pub-list.active { display: block; }
  </style>
</head>
<body>
  <site-header></site-header>

  <main>
    <div class="publications-container">
      <!-- Categories -->
      <nav class="pub-categories">
        <button class="active" data-cat="journal">Journal Articles</button>
        <button data-cat="conference">Conference Presentations</button>
        <button data-cat="patents">Patents</button>
        <button data-cat="others">Others</button>
      </nav>

      <!-- Journal Articles (complete list) -->
      <div class="pub-category-content active" data-cat="journal">

        <!-- 2024 -->
        <div class="year-section">
          <button class="year-toggle">2024</button>
          <div class="pub-list">
            <div class="publication">
              <p class="pub-line">
                D. H. L. Tjhe, X. Ren, I. E. Jacobs, G. D.’Avino, T. B. E. Mustafa, T. G. Marsh, L. Zhang, Y. Fu, <strong>A. E. Mansour</strong>, A. Opitz, Y. Huang, W. Zhu, A. H. Unal, S. Hoek, V. Lemaur, C. Quarti, Q. He, J.-K. Lee, I. McCulloch, M. Heeney, N. Koch, C. P. Grey, D. Beljonne, S. Fratini, H. Sirringhaus
                <strong class="pub-title">“Non-equilibrium transport in polymer mixed ionic–electronic conductors at ultrahigh charge densities”</strong>,
                Nat. Mater. 23, 1712–1719, <strong>2024</strong>
              </p>
              <div class="pub-links">
                <a href="https://www.nature.com/articles/s41563-024-01953-6" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn"
                        data-toc="assets/images/TOC/1.webp"
                        data-abstract="Conducting polymers are mixed ionic–electronic conductors that are emerging candidates for neuromorphic computing, bioelectronics and thermoelectrics. However, fundamental aspects of their many-body correlated electron–ion transport physics remain poorly understood. Here we show that in p-type organic electrochemical transistors it is possible to remove all of the electrons from the valence band and even access deeper bands without degradation. By adding a second, field-effect gate electrode, additional electrons or holes can be injected at set doping states. Under conditions where the counterions are unable to equilibrate in response to field-induced changes in the electronic carrier density, we observe surprising, non-equilibrium transport signatures that provide unique insights into the interaction-driven formation of a frozen, soft Coulomb gap in the density of states. Our work identifies new strategies for substantially enhancing the transport properties of conducting polymers by exploiting non-equilibrium states in the coupled system of electronic charges and counterions.">
                  Abstract
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 2023 -->
        <div class="year-section">
          <button class="year-toggle">2023</button>
          <div class="pub-list">
            <div class="publication">
              <p class="pub-line">
                D. Lungwitz, S. Joy, <strong>A. E. Mansour</strong>, A. Opitz, C. Karunasena, H. Li, N. A. Panjwani, K. Moudgil, K. Tang, J. Behrends, S. Barlow, S. R. Marder, J.-L. Brédas, K. Graham, N. Koch, A. Kahn
                <strong class="pub-title">“Spectral Signatures of a Negative Polaron in a Doped Polymer Semiconductor: Energy Levels and Hubbard U Interactions”</strong>,
                J. Phys. Chem. Lett. 14 (24), 5633–5640, <strong>2023</strong>
              </p>
              <div class="pub-links">
                <a href="https://pubs.acs.org/doi/abs/10.1021/acs.jpclett.3c01022" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn"
                        data-toc="assets/images/TOC/2.png"
                        data-abstract="The modern picture of negative charge carriers on conjugated polymers invokes the formation of a singly occupied (spin-up/spin-down) level within the polymer gap and a corresponding unoccupied level above the polymer conduction band edge. The energy splitting between these sublevels is related to on-site Coulomb interactions between electrons, commonly termed Hubbard U. However, spectral evidence for both sublevels and experimental access to the U value is still missing. Here, we provide evidence by n-doping the polymer P(NDI2OD-T2) with [RhCp*Cp]2, [N-DMBI]2, and cesium. Changes in the electronic structure after doping are studied with ultraviolet photoelectron and low-energy inverse photoemission spectroscopies (UPS, LEIPES). UPS data show an additional density of states (DOS) in the former empty polymer gap while LEIPES data show an additional DOS above the conduction band edge. These DOS are assigned to the singly occupied and unoccupied sublevels, allowing determination of a U value of ∼1 eV.">
                  Abstract
                </button>
              </div>
            </div>
            <div class="publication">
              <p class="pub-line">
                <strong>A. E. Mansour</strong>, R. Warren, D. Lungwitz, M. Forster, U. Scherf, A. Opitz, M. Malischewski, N. Koch
                <strong class="pub-title">“Coordination of tetracyanoquinodimethane-derivatives with tris(pentafluorophenyl)borane provides stronger p-dopants with enhanced stability”</strong>,
                ACS Appl. Mater. Interfaces 15 (39), 46148–46156, <strong>2023</strong>
              </p>
              <div class="pub-links">
                <a href="https://pubs.acs.org/doi/abs/10.1021/acsami.3c10373" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn"
                        data-toc="assets/images/TOC/3.png"
                        data-abstract="Strong molecular dopants for organic semiconductors that are stable against diffusion are in demand, enhancing the performance of organic optoelectronic devices. The conventionally used p-dopants based on 7,7,8,8-tetracyanoquinodimethane (TCNQ) and its derivatives “FxTCN(N)Q”, such as 2,3,4,6-tetrafluoro-7,7,8,8-tetracyanoquinodimethane (F4TCNQ) and 1,3,4,5,7,8-hexafluorotetracyano-naphthoquinodimethane (F6TCNNQ), feature limited oxidation strength, especially for modern polymer semiconductors with high ionization energy (IE). These small molecular dopants also exhibit pronounced diffusion in the polymer hosts. Here, we demonstrate a facile approach to increase the oxidation strength of FxTCN(N)Q by coordination with four tris(pentafluorophenyl)borane (BCF) molecules using a single-step solution mixing process, resulting in bulky dopant complexes “FxTCN(N)Q-4(BCF)”. Using a series of polymer semiconductors with IE up to 5.9 eV, we show by optical absorption spectroscopy of solutions and thin films that the efficiency of doping using FxTCN(N)Q-4(BCF) is significantly higher compared to that using FxTCN(N)Q or BCF alone. Electrical transport measurements with the prototypical poly(3-hexylthiophene-2,5-diyl) (P3HT) confirm the higher doping efficiency of F4TCNQ-4(BCF) compared to F4TCNQ. Additionally, the bulkier structure of F4TCNQ-4(BCF) is shown to result in higher stability against drift in P3HT under an applied electric field as compared to F4TCNQ. The simple approach of solution-mixing of readily accessible molecules thus offers access to enhanced molecular p-dopants for the community.">
                  Abstract
                </button>
              </div>
            </div>
            <div class="publication">
              <p class="pub-line">
                D. Lungwitz, <strong>A. E. Mansour</strong>, Y. Zhang, A. Opitz, S. Barlow, S. R. Marder, N. Koch
                <strong class="pub-title">“Improving the resistance of molecularly doped polymer semiconductor layers to solvent”</strong>,
                Chem. Mater. 35 (2), 672–681, <strong>2023</strong>
              </p>
              <div class="pub-links">
                <a href="https://pubs.acs.org/doi/abs/10.1021/acs.chemmater.2c03262" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn"
                        data-toc="assets/images/TOC/4.png"
                        data-abstract="The ability to form multi-heterolayer (opto)electronic devices by solution processing of (molecularly doped) semiconducting polymer layers is of great interest since it can facilitate the fabrication of large-area and low-cost devices. However, the solution processing of multilayer devices poses a particular challenge with regard to dissolution of the first layer during the deposition of a second layer. Several approaches have been introduced to circumvent this problem for neat polymers, but suitable approaches for molecularly doped polymer semiconductors are much less well-developed. Here, we provide insights into two different mechanisms that can enhance the solvent resistance of solution-processed doped polymer layers while also retaining the dopants, one being the doping-induced pre-aggregation in solution and the other including the use of a photo-reactive agent that results in covalent cross-linking of the semiconductor and, perhaps in some cases, the dopant. For molecularly p-doped poly(3-hexylthiophene-2,5-diyl) and poly[2,5-bis(3-tetradecyl-thiophene-2-yl)thieno(3,2-b)thiophene] layers, we find that the formation of polymer chain aggregates prior to the deposition from solution plays a major role in enhancing solvent resistance. However, this pre-aggregation limits inclusion of the cross-linking agent benzene-1,3,5-triyl tris(4-azido-2,3,5,6-tetrafluorobenzoate). We show that if pre-aggregation in solution is suppressed, high resistance of thin doped polymer layers to solvent can be achieved using the tris(azide). Moreover, the electrical conductivity can be largely retained by increasing the tris(azide) content in a doped polymer layer.">
                  Abstract
                </button>
              </div>
            </div>
            <div class="publication">
              <p class="pub-line">
                C. Gatsios, A. Opitz, D. Lungwitz, <strong>A. E. Mansour</strong>, T. Schultz, D. Shin, S. Hammer, J. Pflaum, Y. Zhang, S. Barlow, S. R. Marder, N. Koch
                <strong class="pub-title">“Surface doping of rubrene single crystals by molecular electron donors and acceptors”</strong>,
                Phys. Chem. Chem. Phys. 25 (43), 29718–29726, <strong>2023</strong>
              </p>
              <div class="pub-links">
                <a href="https://pubs.rsc.org/en/content/articlehtml/2023/cp/d3cp03640e" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn"
                        data-toc="assets/images/TOC/5.png"
                        data-abstract="The surface molecular doping of organic semiconductors can play an important role in the development of organic electronic or optoelectronic devices. Single-crystal rubrene remains a leading molecular candidate for applications in electronics due to its high hole mobility. In parallel, intensive research into the fabrication of flexible organic electronics requires the careful design of functional interfaces to enable optimal device characteristics. To this end, the present work seeks to understand the effect of surface molecular doping on the electronic band structure of rubrene single crystals. Our angle-resolved photoemission measurements reveal that the Fermi level moves in the band gap of rubrene depending on the direction of surface electron-transfer reactions with the molecular dopants, yet the valence band dispersion remains essentially unperturbed. This indicates that surface electron-transfer doping of a molecular single crystal can effectively modify the near-surface charge density, while retaining good charge-carrier mobility.">
                  Abstract
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 2022 -->
        <div class="year-section">
          <button class="year-toggle">2022</button>
          <div class="pub-list">
            <div class="publication">
              <p class="pub-line">
                J. K. El-Demellawi, <strong>A. E. Mansour</strong>, A. M. El-Zohry, M. N. Hedhili, J. Yin, A. M. Emwas, P. Maity, X. Xu, O. M. Bakr, O. F. Mohammed, H. N. Alshareef
                <strong class="pub-title">“Tuning the Work Function of Ti₃C₂Tₓ MXene by Molecular Doping without Changing its Surface Functional Groups”</strong>,
                ACS Mater. Lett. 4 (12), 2480–2490, <strong>2022</strong>
              </p>
              <div class="pub-links">
                <a href="https://doi.org/10.1021/acsmaterialslett.2c00796" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn" 
                    data-toc="assets/images/TOC/6.png" 
                    data-abstract="Owing to their impressive electronic/optoelectronic properties, MXenes have attracted significant attention among the 2D materials research community. Their work function (WF) tunability, in particular, has permitted efficient interfacial band alignment engineering in several device applications. However, like most of their properties, the WF of MXenes highly depends on their surface terminations, making it hard to individually modify the WF without compromising other fundamental properties, which hinders the exploitation of MXenes to their full potential. Herein, we introduce a surface-termination-independent method to tune the WF of Ti3C2Tx MXene through molecular doping. The achieved stepwise 500-meV increase in WF, in ∼120-meV increments, is induced by subsurface electron depletion from Ti3C2Tx, with no effect on its other key properties. Utilizing electron paramagnetic resonance and ultrafast laser spectroscopy, we reveal that tuning the WF of Ti3C2Tx is entirely surface-termination-independent. Such discrete control over the WF renders MXene-based devices with unprecedented operational degrees of freedom.">
                  Abstract
                </button>
              </div>
            </div>
            <div class="publication">
              <p class="pub-line">
                F. Saeedifard, D. Lungwitz, Z. Yu, S. Schneider, <strong>A. E. Mansour</strong>, A. Opitz, S. Barlow, M. F. Toney, J. Pei, N. Koch, S. R. Marder
                <strong class="pub-title">“Use of a Multiple Hydride Donor To Achieve an n-Doped Polymer with High Solvent Resistance”</strong>,
                ACS Appl. Mater. Interfaces 14 (29), 33598–33605, <strong>2022</strong>
              </p>
              <div class="pub-links">
                <a href="https://doi.org/10.1021/acsami.2c05724" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn" 
                    data-toc="assets/images/TOC/7.png" 
                    data-abstract="The ability to insolubilize doped semiconducting polymer layers can help enable the fabrication of efficient multilayer solution-processed electronic and optoelectronic devices. Here, we present a promising approach to simultaneously n-dope and largely insolubilize conjugated polymer films using tetrakis[{4-(1,3-dimethyl-2,3-dihydro-1H-benzo[d]imidazol-2-yl)phenoxy}methyl]methane (tetrakis-O-DMBI-H), which consists of four 2,3-dihydro-1H-benzoimidazole (DMBI-H) n-dopant moieties covalently linked to one another. Doping a thiophene-fused benzodifurandione-based oligo(p-phenylenevinylene)-co-thiophene polymer (TBDOPV-T) with tetrakis-O-DMBI-H results in a highly n-doped film with bulk conductivity of 15 S cm–1. Optical absorption spectra provide evidence for film retention of ∼93% after immersion in o-dichlorobenzene for 5 min. The optical absorption signature of the charge carriers in the n-doped polymer decreases only slightly more than that of the neutral polymer under these conditions, indicating that the exposure to solvent also results in negligible dedoping of the film. Moreover, thermal treatment studies on a tetrakis-O-DMBI-H-doped TBDOPV-T film in contact with another undoped polymer film indicate immobilization of the molecular dopant in TBDOPV-T. This is attributed to the multiple electrostatic interactions between each dopant tetracation and up to four nearby anionic doped polymer segments.">
                  Abstract
                </button>
              </div>
            </div>
            <div class="publication">
              <p class="pub-line">
                A. E. Mansour, A. Valencia, D. Lungwitz, B. Wegner, N. Tanaka, Y. Shoji, T. Fukushima, A. Opitz, C. Cocchi & N. Koch
                <strong class="pub-title">“Understanding the evolution of the Raman spectra of molecularly p-doped poly(3-hexylthiophene-2,5-diyl): signatures of polarons and bipolarons”</strong>,
                PCCP 24 (5), 3109–3118, <strong>2022</strong>
              </p>
              <div class="pub-links">
                <a href="https://doi.org/10.1039/D1CP04985B" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn" 
                    data-toc="assets/images/TOC/8.png" 
                    data-abstract="Molecular doping is a key process to increase the density of charge carriers in organic semiconductors. Doping-induced charges in polymer semiconductors result in the formation of polarons and/or bipolarons due to the strong electron-vibron coupling in conjugated organic materials. Identifying the nature of charge carriers in doped polymers is essential to optimize the doping process for applications. In this work, we use Raman spectroscopy to investigate the formation of charge carriers in molecularly doped poly(3-hexylthiophene-2,5-diyl) (P3HT) for increasing dopant concentration, with the organic salt dimesityl borinium tetrakis(penta-fluorophenyl)borate (Mes2B+ [B(C6F5)4]−) and the Lewis acid tris(pentafluorophenyl)borane [B(C6F5)3]. While the Raman signatures of neutral P3HT and singly charged P3HT segments (polarons) are known, the Raman spectra of doubly charged P3HT segments (bipolarons) are not yet sufficiently understood. Combining Raman spectroscopy measurements on doped P3HT thin films with first-principles calculations on oligomer models, we explain the evolution of the Raman spectra from neutral P3HT to increasingly doped P3HT featuring polarons and eventually bipolarons at high doping levels. We identify and explain the origin of the spectral features related to bipolarons by tracing the Raman signature of the symmetric collective vibrations along the polymer backbone, which – compared to neutral P3HT – redshifts for polarons and blueshifts for bipolarons. This is explained by a planarization of the singly charged P3HT segments with polarons and rather high order in thin films, while the doubly charged segments with bipolarons are located in comparably disordered regions of the P3HT film due to the high dopant concentration. Furthermore, we identify additional Raman peaks associated with vibrations in the quinoid doubly charged segments of the polymer. Our results offer the opportunity for readily identifying the nature of charge carriers in molecularly doped P3HT while taking advantage of the simplicity, versatility, and non-destructive nature of Raman spectroscopy.">
                  Abstract
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 2021 -->
        <div class="year-section">
          <button class="year-toggle">2021</button>
          <div class="pub-list">
            <div class="publication">
              <p class="pub-line">
                F. Grassl, A. Ullrich, <strong>A. E. Mansour</strong>, S. M. Abdalbaqi, N. Koch, A. Opitz, M. Scheele & W. Brütting
                <strong class="pub-title">“Coupled Organic–Inorganic Nanostructures with Mixed Organic Linker Molecules”</strong>,
                ACS Appl. Mater. Interfaces 13 (31), 37483–37493, <strong>2021</strong>
              </p>
              <div class="pub-links">
                <a href="https://doi.org/10.1021/acsami.1c08614" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn" 
                    data-toc="assets/images/TOC/9.png" 
                    data-abstract="The electronic properties of semiconducting inorganic lead sulfide (PbS) nanocrystals (NCs) and organic linker molecules are dependent on the size of NCs as well as the used ligands. Here, we demonstrate that a weakly binding ligand can be successfully attached to PbS NCs to form a coupled organic–inorganic nanostructure (COIN) by mixing with a strong binding partner. We use the weakly binding zinc β-tetraaminophthalocyanine (Zn4APc) in combination with the strongly binding 1,2-ethanedithiol (EDT) as a mixed ligand system and compare its structural, electronic, and (photo-)electrical properties with both single-ligand COINs. It is found that binding of Zn4APc is assisted by the presence of EDT leading to improved film homogeneity, lower trap density, and enhanced photocurrent of the derived devices. Thus, the mixing of ligands is a versatile tool to achieve COINs with improved performance.">
                  Abstract
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 2020 -->
        <div class="year-section">
          <button class="year-toggle">2020</button>
          <div class="pub-list">
            <!-- 2020-1 -->
            <div class="publication">
              <p class="pub-line">
                <strong>A. E. Mansour</strong>, H. Kim, S. Park, T. Schultz, D. X. Cao, T.-Q. Nguyen, W. Brütting, A. Opitz & N. Koch
                <strong class="pub-title">“Conductive Polymer Work Function Changes due to Residual Water: Impact of Temperature-Dependent Dielectric Constant”</strong>,
                Adv. Electron. Mater. 6, 2000408, <strong>2020</strong>
              </p>
              <div class="pub-links">
                <a href="https://doi.org/10.1002/aelm.202000408" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn" 
                    data-toc="assets/images/TOC/10.png" 
                    data-abstract="Solution-processed conducting polymer thin films are key components in organic and flexible electronic and optoelectronic devices. An archetypal conducting polymer is poly(3,4-ethylenedioxythiophene)-poly(styrenesulfonate) (PEDOT:PSS), which can feature a high work function and thus helps achieving Ohmic contacts for holes with many semiconductors. However, it is known that residual water in PEDOT:PSS films lowers their work function and is detrimental for device lifetime. Our photoelectron spectroscopy experiments reveal that the work function of PEDOT:PSS films containing residual water shows the same trend as function of temperature as does the dielectric constant (ε) of water, in the range between 25 °C and -100 °C. Consistently, it is found from impedance spectroscopy measurements that ε of residual water containing PEDOT:PSS films increases with decreasing temperature. After removal of residual water from PEDOT:PSS films by annealing in ultrahigh vacuum, the work function of thin films is much higher than before (reaching 6.1 eV) and, notably, independent of temperature. In contrast, no indication is found that the presence of residual water has any impact on the electrical conductivity. For a nominally water-free molecularly doped conjugated donor/acceptor copolymer films, a correlation between sample work function and temperature similar to those seen for PEDOT:PSS is found.">
                  Abstract
                </button>
              </div>
            </div>
            <!-- 2020-2 -->
            <div class="publication">
              <p class="pub-line">
                B. Wegner, D. Lungwitz, <strong>A. E. Mansour</strong>, C. E. Tait, N. Tanaka, T. Zhai, S. Duhm, M. Forster, J. Behrends, Y. Shoji, A. Opitz, U. Scherf, E. J. W. List-Kratochvil, T. Fukushima & N. Koch
                <strong class="pub-title">“An Organic Borate Salt with Superior p-Doping Capability for Organic Semiconductors”</strong>,
                Adv. Sci. 7, 2001322, <strong>2020</strong>
              </p>
              <div class="pub-links">
                <a href="https://doi.org/10.1002/advs.202001322" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn" 
                    data-toc="assets/images/TOC/11.png" 
                    data-abstract="Molecular doping allows enhancement and precise control of electrical properties of organic semiconductors, and is thus of central technological relevance for organic (opto-) electronics. Beyond single-component molecular electron acceptors and donors, organic salts have recently emerged as a promising class of dopants. However, the pertinent fundamental understanding of doping mechanisms and doping capabilities is limited. Here, the unique capabilities of the salt consisting of a borinium cation (Mes2B+; Mes: mesitylene) and the tetrakis(penta-fluorophenyl)borate anion [B(C6F5)4]− is demonstrated as p-type dopant for polymer semiconductors. With a range of experimental methods, the doping mechanism is identified to comprise electron transfer from the polymer to Mes2B+, and the positive charge on the polymer is stabilized by [B(C6F5)4]−. Notably, the former salt cation leaves during processing and is not present in films. The anion [B(C6F5)4]− even enables the stabilization of polarons and bipolarons in poly(3-hexylthiophene), not yet achieved with other molecular dopants. From doping studies with high ionization energy polymer semiconductors, the effective electron affinity of Mes2B+[B(C6F5)4]− is estimated to be an impressive 5.9 eV. This significantly extends the parameter space for doping of polymer semiconductors.">
                  Abstract
                </button>
              </div>
            </div>
            <!-- 2020-3 -->
            <div class="publication">
              <p class="pub-line">
                M. Arvind, C. Tait, M. Guerrini, J. Krumland, A. M. Valencia, C. Cocchi, <strong>A. E. Mansour</strong>, N. Koch, S. Barlow, S. R. Marder, J. Behrends & D. Neher
                <strong class="pub-title">“Quantitative Analysis of Doping-Induced Polarons and Charge-Transfer Complexes of Poly(3-hexylthiophene) in Solution”</strong>,
                J. Phys. Chem. B 124 (35), 7694–7708, <strong>2020</strong>
              </p>
              <div class="pub-links">
                <a href="https://doi.org/10.1021/acs.jpcb.0c03517" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn" 
                    data-toc="assets/images/TOC/12.png" 
                    data-abstract="The mechanism and the nature of the species formed by molecular doping of the model polymer poly(3-hexylthiophene) (P3HT) in its regioregular (rre-) and regiorandom (rra-) forms in solution are investigated for three different dopants: the prototypical π-electron acceptor 2,3,5,6-tetrafluoro-7,7,8,8-tetracyanoquinodimethane (F4TCNQ), the strong Lewis acid tris(pentafluorophenyl)borane (BCF), and the strongly oxidizing complex molybdenum tris[1-(methoxycarbonyl)-2-(trifluoromethyl)ethane-1,2-dithiolene] (Mo(tfd-CO2Me)3). In a combined optical and electron paramagnetic resonance study, we show that the doping of rreP3HT in solution occurs by integer charge transfer, resulting in formation of P3HT radical cations (polarons) for all of the dopants considered here. Remarkably, despite the different chemical nature of the dopants and dopant–polymer interaction, the formed polarons exhibit essentially identical optical absorption spectra. The situation is very different for the doping of rraP3HT, where we observe formation of a charge-transfer complex with F4TCNQ and of a “localized” P3HT polaron on nonaggregated chains upon doping with BCF, while there is no indication of dopant-induced species in the case of Mo(tfd-CO2Me)3. We estimate the ionization efficiency of the respective dopants for the two polymers in solution and report the molar extinction coefficient spectra of the three different species. Finally, we observe increased spin delocalization in regioregular compared to regiorandom P3HT by electron nuclear double resonance, suggesting that the ability of the charge to delocalize on aggregates of planarized polymer backbones plays a significant role in determining the doping mechanism.">
                  Abstract
                </button>
              </div>
            </div>
            <!-- 2020-4 -->
            <div class="publication">
              <p class="pub-line">
                A. R. Kirmani, F. Eisner, <strong>A. E. Mansour</strong>, Y. Firdaus, N. Chaturvedi, A. Seitkhan, M. I. Nugraha, E. Yarali, F. Pelayo García de Arquer, E. H. Sargent, T. D. Anthopoulos & A. Amassian
                <strong class="pub-title">“Colloidal Quantum Dot Photovoltaics Using Ultrathin, Solution-Processed Bilayer In₂O₃/ZnO Electron Transport Layers with Improved Stability”</strong>,
                ACS Appl. Energy Mater. 3 (6), 5135–5141, <strong>2020</strong>
              </p>
              <div class="pub-links">
                <a href="https://doi.org/10.1021/acsaem.0c00831" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn" 
                    data-toc="assets/images/TOC/13.png" 
                    data-abstract="Solution-processed colloidal quantum dot (CQD) photovoltaics (PVs) continue to mature with improvements in device architectures and ligand exchange strategies. Carrier selective contacts extract photogenerated charge carriers from the CQD absorber; however, the role of the electron-transporting layer (ETL) in stability remains unclear. Herein, we find that the typically used >100 nm thick ZnO ETL suffers from parasitic absorption and carrier recombination resulting in unstable n–i–p solar cells with faster UV-degradation. We address this by developing an ultrathin (ca. 20 nm), quantum-confined, solution-processed In2O3/ZnO ETL. This bilayer ETL results in solar cells with significantly improved overall stability without compromising performance, with an 11.1% power conversion efficiency hero device.">
                  Abstract
                </button>
              </div>
            </div>
            <!-- 2020-5 -->
            <div class="publication">
              <p class="pub-line">
                A. R. Kirmani, <strong>A. E. Mansour</strong>, C. Yang, R. Munir, A. M. El-Zohry, O. F. Mohammed & A. Amassian
                <strong class="pub-title">“Facile and noninvasive passivation, doping and chemical tuning of macroscopic hybrid perovskite crystals”</strong>,
                PLoS ONE 15 (3): e0230540, <strong>2020</strong>
              </p>
              <div class="pub-links">
                <a href="https://doi.org/10.1371/journal.pone.0230540" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn" data-toc="assets/images/toc-2020-5.jpg" data-abstract="">
                  Abstract
                </button>
              </div>
            </div>
            <!-- 2020-6 -->
            <div class="publication">
              <p class="pub-line">
                <strong>A. E. Mansour</strong>, D. Lungwitz, T. Schultz, M. Arvind, A. M. Valencia, C. Cocchi, A. Opitz & D. Neher
                <strong class="pub-title">“The optical signatures of molecular-doping induced polarons in poly(3-hexylthiophene-2,5-diyl): individual polymer chains versus aggregates”</strong>,
                J. Mater. Chem. C 8 (8), 2870–2879, <strong>2020</strong>
              </p>
              <div class="pub-links">
                <a href="https://doi.org/10.1039/C9TC06528A" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn" 
                    data-toc="assets/images/TOC/14.png" 
                    data-abstract="Halide vacancies and associated metallic lead (Pb°) observed at the surface and deep inside macroscopic organolead trihalide perovskite crystals is removed through a facile and noninvasive treatment. Indeed, Br2 vapor is shown to passivate Br-vacancies and associated Pb° in the bulk of macroscopic crystals. Controlling the exposure time can markedly improve the overall stoichiometry for moderate exposures or introduce excessive bromide for long exposures, resulting in p-doping of the crystals. In the low dose passivation regime, Hall effect measurements reveal a ca. 3-fold increase in carrier mobility to ca. 15 cm2V-1s-1, while the p-doping increases the electrical conductivity ca. 10000-fold, including a 50-fold increase in carrier mobility to ca. 150 cm2V-1s-1. The ease of diffusion of Br2 vapor into macroscopic crystals is ascribed to the porosity allowed in rapidly grown crystals through aggregative processes of the colloidal sol during growth of films and macroscopic crystals. This process is believed to form significant growth defects, including open voids, which may be remnants of the escaping solvent at the solidification front. These results suggest that due to the sol-gel-like nature of the growth process, macroscopic perovskite crystals reported in this study are far from perfect and point to possible pathways to improving the optoelectronic properties of these materials. Nevertheless, the ability of the vapor-phase approach to access and tune the bulk chemistry and properties of nominally macroscopic perovskite crystals provides interesting new opportunities to precisely manipulate and functionalize the bulk properties of hybrid perovskite crystals in a noninvasive manner.">
                  Abstract
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 2019 -->
        <div class="year-section">
          <button class="year-toggle">2019</button>
          <div class="pub-list">
            <div class="publication">
              <p class="pub-line">
                B. Yurash, D. X. Cao, V. V. Brus, D. Leifert, M. Wang, A. Dixon, M. Seifrid, <strong>A. E. Mansour</strong>, D. Lungwitz, T. Liu, P. J. Santiago, K. R. Graham, N. Koch, G. C. Bazan & T.-Q. Nguyen
                <strong class="pub-title">“Towards understanding the doping mechanism of organic semiconductors by Lewis acids”</strong>,
                Nat. Mater. 18 (12), 1327–1334, <strong>2019</strong>
              </p>
              <div class="pub-links">
                <a href="https://doi.org/10.1038/s41563-019-0479-0" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn" 
                    data-toc="assets/images/TOC/15.png" 
                    data-abstract="Precise doping of organic semiconductors allows control over the conductivity of these materials, an essential parameter in electronic applications. Although Lewis acids have recently shown promise as dopants for solution-processed polymers, their doping mechanism is not yet fully understood. In this study, we found that B(C6F5)3 is a superior dopant to the other Lewis acids investigated (BF3, BBr3 and AlCl3). Experiments indicate that Lewis acid–base adduct formation with polymers inhibits the doping process. Electron–nuclear double-resonance and nuclear magnetic resonance experiments, together with density functional theory, show that p-type doping occurs by generation of a water–Lewis acid complex with substantial Brønsted acidity, followed by protonation of the polymer backbone and electron transfer from a neutral chain segment to a positively charged, protonated one. This study provides insight into a potential path for protonic acid doping and shows how trace levels of water can transform Lewis acids into powerful Brønsted acids.">
                  Abstract
                </button>
              </div>
            </div>
            <div class="publication">
              <p class="pub-line">
                D. B. Velusamy, J. K. El-Demellawi, A. M. El-Zohry, A. Giugni, S. Lopatin, M. N. Hedhili, <strong>A. E. Mansour</strong>, E. Di Fabrizio, O. F. Mohammed & H. N. Alshareef
                <strong class="pub-title">“MXenes for Plasmonic Photodetection”</strong>,
                Adv. Mater. 1807658, <strong>2019</strong>
              </p>
              <div class="pub-links">
                <a href="https://doi.org/10.1002/adma.201807658" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn" 
                    data-toc="assets/images/TOC/16.png" 
                    data-abstract="MXenes have recently shown impressive optical and plasmonic properties associated with their ultrathin-atomic-layer structure. However, their potential use in photonic and plasmonic devices has been only marginally explored. Photodetectors made of five different MXenes are fabricated, among which molybdenum carbide MXene (Mo2CTx) exhibits the best performance. Mo2CTx MXene thin films deposited on paper substrates exhibit broad photoresponse in the range of 400–800 nm with high responsivity (up to 9 A W−1), detectivity (≈5 × 1011 Jones), and reliable photoswitching characteristics at a wavelength of 660 nm. Spatially resolved electron energy-loss spectroscopy and ultrafast femtosecond transient absorption spectroscopy of the MXene nanosheets reveal that the photoresponse of Mo2CTx is strongly dependent on its surface plasmon-assisted hot carriers. Additionally, Mo2CTx thin-film devices are shown to be relatively stable under ambient conditions, continuous illumination and mechanical stresses, illustrating their durable photodetection operation in the visible spectral range. Micro-Raman spectroscopy conducted on bare Mo2CTx film and on gold electrodes allowing for surface-enhanced Raman scattering demonstrates surface chemistry and a specific low-frequency band that is related to the vibrational modes of the single nanosheets. The specific ability to detect and excite individual surface plasmon modes provides a viable platform for various MXene-based optoelectronic applications.">
                  Abstract
                </button>
              </div>
            </div>
            <div class="publication">
              <p class="pub-line">
                E. Dauzon, <strong>A. E. Mansour</strong>, M. R. Niazi, R. Munir, D.-M. Smilgies, X. Sallenave, C. Plesse, F. Goubard & A. Amassian
                <strong class="pub-title">“Conducting and Stretchable PEDOT: PSS Electrodes: Role of Additives on Self-Assembly, Morphology and Transport”</strong>,
                ACS Appl. Mater. Interfaces 11 (19), 17570–17582, <strong>2019</strong>
              </p>
              <div class="pub-links">
                <a href="https://doi.org/10.1021/acsami.9b00934" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn" 
                    data-toc="assets/images/TOC/17.png" 
                    data-abstract="The addition of dimethylsulfoxide and Zonyl into poly(3,4-ethylenedioxythiophene):polystyrene sulfonate (PEDOT:PSS) can be combined to achieve excellent electrical, optical, and mechanical properties. We demonstrate that it is possible to produce highly transparent conducting electrodes (FoM > 35) with low Young’s modulus and high carrier density. We investigated the relationship between the transport properties of PEDOT:PSS and the morphology and microstructure of these films by performing Hall effect measurement, atomic force microscopy, and grazing incidence wide-angle X-ray scattering (GIWAXS). Our analysis reveals the distinctive impact of the two additives on the PEDOT and PSS components in the solid-state PEDOT:PSS films. Both additives induce fibrillar formation in the film, and the combination of the two additives only enhances the fibrillary nature and the aggregations of both PEDOT and PSS components of the film. In situ GIWAXS allows to time-resolve the morphology evolution. Our analysis reveals the influence of additives on the aggregation and self-assembly behaviors of the PEDOT and PSS components. Aggregation occurs during the transition from wet to dry film, which is observed exclusively during the thermal annealing step of the as-cast hydrated film. These results indicate that the additives directly influence the self-assembly behaviors of PEDOT and PSS during the ink-to-solid phase transformation of the hydrated film, which occurs primarily during the initial seconds of post-deposition thermal annealing.">
                  Abstract
                </button>
              </div>
            </div>
            <div class="publication">
              <p class="pub-line">
                L. Serrano-Luján, S. Víctor-Román, C. Toledo, O. Sanahuja, <strong>A. E. Mansour</strong>, J. Abad, A. Amassian, A. M. Benito, W. K. Maser & A. Urbina
                <strong class="pub-title">“Environmental Impact of the Production of Graphene Oxide and Reduced Graphene Oxide”</strong>,
                SN Appl. Sci. 1, 179, <strong>2019</strong>
              </p>
              <div class="pub-links">
                <a href="https://doi.org/10.1007/s42452-019-0193-1" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn" 
                    data-toc="assets/images/TOC/18.png" 
                    data-abstract="Reduced graphene oxide (rGO) is widely seen as the most promising route for the low-cost mass production of graphene for many applications ranging from ultrathin electrodes to structural nanocomposites. The Hummers and Marcano methods are the two most successful approaches for producing high-performance rGO, but have been criticized for producing toxic emissions. We have applied life cycle assessment methodology to evaluate the environmental impacts of both production routes for GO and rGO in the context of applications requiring bulk materials or thin coatings. We find no current obstacle to the industrial scale production of graphene arising from its environmental impact. The cumulative energy demand is found to have a cap value between 20.7 and 68.5 GJ/Kg, a relatively high value; impact in other categories (such as human toxicity or resource depletion) is lower, and materials inventory does not include critical/strategic materials other than graphite itself. Our study proposes 1 kg of graphene as functional unit, and an application-specific functional unit normalized by conductivity which show that Hummers production method is far more suitable for bulk applications of graphene, with lower embedded energy per kg of graphene production, while Marcano’s production method is better suited for thin film electronic applications.">
                  Abstract
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 2018 -->
        <div class="year-section">
          <button class="year-toggle">2018</button>
          <div class="pub-list">
            <div class="publication">
              <p class="pub-line">
                A. R. Kirmani, <strong>A. E. Mansour</strong>, M. I. Saidaminov, X. Cui, D. Shi, A. Alofi, Ya. B. Losovyj, G. Gurung, T. R. Paudel, A. J. Yost, P. A. Dowben, E. Y. Tsymbal, A. Amassian & K. Katsiev
                <strong class="pub-title">“Contributions of the lead-bromine weighted bands to the occupied density of states of the hybrid tri-bromide perovskites”</strong>,
                Appl. Phys. Lett. 113 (2), 022101, <strong>2018</strong>
              </p>
              <div class="pub-links">
                <a href="https://doi.org/10.1063/1.5024527" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn" 
                    data-toc="assets/images/TOC/19.png" 
                    data-abstract="The electronic structure of methylammonium lead bromide (CH3NH3PbBr3) single crystals has been investigated through a combination of resonant photoemission and theoretical modeling. There are Pb spectral contributions throughout the valence band. Importantly, the electronic structure at the top of the valence band is found to be dominated by the hybridized Pb-Br bands, not methylammonium bromide. The results line up with the partial density of states obtained from density functional theory and confirm that much of the valence band has some Pb spectral weight.">
                  Abstract
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 2017 -->
        <div class="year-section">
          <button class="year-toggle">2017</button>
          <div class="pub-list">
            <div class="publication">
              <p class="pub-line">
                <strong>A. E. Mansour</strong>, A. R. Kirmani, S. Barlow, S. R. Marder & A. Amassian
                <strong class="pub-title">“Hybrid Doping Strategy for Few-Layer Graphene via a Combination of Intercalation and Surface Doping”</strong>,
                ACS Appl. Mater. Interfaces 9 (23), 20020–20028, <strong>2017</strong>
              </p>
              <div class="pub-links">
                <a href="https://doi.org/10.1021/acsami.7b02886" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn" 
                    data-toc="assets/images/TOC/20.png" 
                    data-abstract="Surface molecular doping of graphene has been shown to modify its work function and increase its conductivity. However, the associated shifts in work function and increases in carrier concentration are highly coupled and limited by the surface coverage of dopant molecules on graphene. Here we show that few-layer graphene (FLG) can be doped using a hybrid approach, effectively combining surface doping by larger (metal−)organic molecules and intercalation of smaller molecules, such as Br2 and FeCl3, into the bulk. Intercalation tunes the carrier concentration more effectively, whereas surface doping of intercalated FLG can be used to tune its work function without reducing the carrier mobility. This multimodal doping approach yields a very high carrier density and tunable increase in the work function for FLG, demonstrating a new versatile platform for fabricating graphene-based contacts for electronic, optoelectronic, and photovoltaic applications.">
                  Abstract
                </button>
              </div>
            </div>
            <div class="publication">
              <p class="pub-line">
                S. P. Sarmah, V. M. Burlakov, E. Yengel, B. Murali, E. Alarousu, A. M. El-Zohry, C. Yang, M. S. Alias, A. A. Zhumekenov, M. I. Saidaminov, N. Cho, N. Wehbe, S. Mitra, I. Ajia, S. Dey, <strong>A. E. Mansour</strong>, M. Abdelsamie, A. Amassian, I. S. Roqan, B. S. Ooi, A. Goriely, O. M. Bakr & O. F. Mohammed
                <strong class="pub-title">“Double charged surface layers in lead halide perovskite crystals”</strong>,
                Nano Lett. 17 (3), 2021–2027, <strong>2017</strong>
              </p>
              <div class="pub-links">
                <a href="https://doi.org/10.1021/acs.nanolett.7b00031" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn" 
                    data-toc="assets/images/TOC/21.png" 
                    data-abstract="Understanding defect chemistry, particularly ion migration, and its significant effect on the surface’s optical and electronic properties is one of the major challenges impeding the development of hybrid perovskite-based devices. Here, using both experimental and theoretical approaches, we demonstrated that the surface layers of the perovskite crystals may acquire a high concentration of positively charged vacancies with the complementary negatively charged halide ions pushed to the surface. This charge separation near the surface generates an electric field that can induce an increase of optical band gap in the surface layers relative to the bulk. We found that the charge separation, electric field, and the amplitude of shift in the bandgap strongly depend on the halides and organic moieties of perovskite crystals. Our findings reveal the peculiarity of surface effects that are currently limiting the applications of perovskite crystals and more importantly explain their origins, thus enabling viable surface passivation strategies to remediate them.">
                  Abstract
                </button>
              </div>
            </div>
            <div class="publication">
              <p class="pub-line">
                <strong>A. E. Mansour</strong>, M. M. Said, S. Dey, H. Hu, S. Zhang, R. Munir, Y. Zhang, K. Moudgil, S. Barlow, S. R. Marder & A. Amassian
                <strong class="pub-title">“Facile doping and work-function modification of few-layer graphene using molecular oxidants and reductants”</strong>,
                Adv. Funct. Mater. 27 (7), 1602004, <strong>2017</strong>
              </p>
              <div class="pub-links">
                <a href="https://doi.org/10.1002/adfm.201602004" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn" 
                    data-toc="assets/images/TOC/22.png" 
                    data-abstract="Doping of graphene is a viable route toward enhancing its electrical conductivity and modulating its work function for a wide range of technological applications. In this work, the authors demonstrate facile, solution-based, noncovalent surface doping of few-layer graphene (FLG) using a series of molecular metal-organic and organic species of varying n- and p-type doping strengths. In doing so, the authors tune the electronic, optical, and transport properties of FLG. The authors modulate the work function of graphene over a range of 2.4 eV (from 2.9 to 5.3 eV)—unprecedented for solution-based doping—via surface electron transfer. A substantial improvement of the conductivity of FLG is attributed to increasing carrier density, slightly offset by a minor reduction of mobility via Coulomb scattering. The mobility of single layer graphene has been reported to decrease significantly more via similar surface doping than FLG, which has the ability to screen buried layers. The dopant dosage influences the properties of FLG and reveals an optimal window of dopant coverage for the best transport properties, wherein dopant molecules aggregate into small and isolated clusters on the surface of FLG. This study shows how soluble molecular dopants can easily and effectively tune the work function and improve the optoelectronic properties of graphene.">
                  Abstract
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 2016 -->
        <div class="year-section">
          <button class="year-toggle">2016</button>
          <div class="pub-list">
            <div class="publication">
              <p class="pub-line">
                L. K. Jagadamma, H. Hu, T. Kim, G. O. Ngongang Ndjawa, <strong>A. E. Mansour</strong>, J. C. D. Faria, R. Munir, D. H. Anjum, A. El Labban, M. A. McLachlan & A. Amassian
                <strong class="pub-title">“Solution-Processable MoOx Nanocrystals Enable Highly Efficient Reflective and Semitransparent Polymer Solar Cells”</strong>,
                Nano Energy 28, 277–287, <strong>2016</strong>
              </p>
              <div class="pub-links">
                <a href="https://doi.org/10.1016/j.nanoen.2016.08.019" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn" 
                    data-toc="assets/images/TOC/23.png" 
                    data-abstract="Solution-manufacturing of organic solar cells with best-in-class power conversion efficiency (PCE) will require all layers to be solution-coated without compromising solar cell performance. To date, the hole transporting layer (HTL) deposited on top of the organic bulk heterojunction layer in the inverted architecture is most commonly an ultrathin (<10 nm) metal oxide layer prepared by vacuum-deposition. Here, we show that an alcohol-based nanocrystalline MoOx suspension with carefully controlled nanocrystal (NC) size can yield state of the art reflective and semitransparent solar cells. Using NCs smaller than the target HTL thickness (∼10 nm) can yield compact, pinhole-free films which result in highly efficient polymer:fullerene bulk heterojunction (BHJ) solar cells with PCE=9.5%. The solution processed HTL is shown to achieve performance parity with vacuum-evaporated HTLs for several polymer:fullerene combinations and is even shown to work as hole injection layer in polymer light emitting diodes (PLED). We also demonstrate that larger MoOx NCs (30–50 nm) successfully composite MoOx with Ag nanowires (NW) to form a highly conducting, transparent top anode with exceptional contact properties. This yields state-of-the-art semitransparent polymer: fullerene solar cells with PCE of 6.5% and overall transmission >30%. The remarkable performance of reflective and semitransparent OPVs is due to the uncommonly high fill factors achieved using a carefully designed strategy for implementation of MoOx nanocrystals as HTL materials.">
                  Abstract
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 2015 -->
        <div class="year-section">
          <button class="year-toggle">2015</button>
          <div class="pub-list">
            <div class="publication">
              <p class="pub-line">
                <strong>A. E. Mansour</strong>, S. Dey, M. H. Tanielian & A. Amassian
                <strong class="pub-title">“Bromination of Graphene: A new route to Making High Performance Transparent Conducting Electrodes with Low Optical Losses”</strong>,
                ACS Appl. Mater. Interfaces 7 (32), 17691–17699, <strong>2015</strong>
              </p>
              <div class="pub-links">
                <a href="https://doi.org/10.1021/acsami.5b03274" target="_blank" rel="noopener">DOI</a>
                <button class="abstract-btn" 
                    data-toc="assets/images/TOC/24.png" 
                    data-abstract="The unique optical and electrical properties of graphene have triggered great interest in its application as a transparent conducting electrode material and significant effort has been invested in achieving high conductivity while maintaining high transparency. Doping of graphene has been a popular route for reducing its sheet resistance, but this has typically come at a significant loss in optical transmittance. We demonstrate doping of few layers graphene (FLG) with bromine as a means of enhancing the conductivity via intercalation without major optical losses. Our results demonstrate the encapsulation of bromine within the FLG, leading to air-stable transparent conducting electrodes with 5-fold improvement of sheet resistance reaching ∼180 Ω/□ at the cost of only 2–3% loss of optical transmittance. The remarkably low trade-off in optical transparency leads to the highest enhancements in the figure of merit reported thus far for FLG. Furthermore, we tune the work function by up to 0.3 eV by tuning the bromine content. These results should help pave the way for further development of graphene as a potential substitute to transparent conducting polymers and metal oxides used in optoelectronics, photovoltaics, and beyond.">
                  Abstract
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Conference Presentations -->
      <div class="pub-category-content" data-cat="conference">
        <h3>No conference presentations added yet.</h3>
      </div>

      <!-- Patents -->
      <div class="pub-category-content" data-cat="patents">
        <h3>No patents added yet.</h3>
      </div>

      <!-- Others -->
      <div class="pub-category-content" data-cat="others">
      </div>
      <!-- 2024 -->
      <div class="year-section">
        <button class="year-toggle">2024</button>
        <div class="pub-list">
          <div class="publication">
            <p class="pub-line">
              S. Nakhaie, <strong>A. E. Mansour</strong>, K. Helbig, M. Bierwirth, C. Draxl, M. Aeschlimann
              <strong class="pub-title">“FAIRmat Guide to Legal Aspects in Research Data Management”</strong>,
              Zenodo, <strong>2024</strong>
            </p>
            <div class="pub-links">
              <a href="https://doi.org/10.5281/zenodo.11083303" target="_blank" rel="noopener">DOI</a>
              <button class="abstract-btn"
                      data-toc="assets/images/TOC/26.png"
                      data-abstract="This guide provides an overview of the key legal considerations relevant to the various stages of the data lifecycle. It is specifically designed for graduate students, postdoctoral researchers, and principal investigators who wish to understand and navigate the legal aspects of research data management in their research projects.">
                Abstract
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 2023 -->
      <div class="year-section">
        <button class="year-toggle">2023</button>
        <div class="pub-list">
          <div class="publication">
            <p class="pub-line">
              <strong>A. E. Mansour</strong>, L. Rotheray, K. Helbig, S. Botti, H. B. Weber, M. Aeschlimann, Martin, C. Draxl
              <strong class="pub-title">“FAIRmat, Guide to Writing a Research Data Management Plan”</strong>,
              Zenodo, <strong>2023</strong>
            </p>
            <div class="pub-links">
              <a href="https://doi.org/10.5281/zenodo.7936477" target="_blank" rel="noopener">DOI</a>
              <button class="abstract-btn"
                      data-toc="assets/images/TOC/25.png"
                      data-abstract="In this guide, we will provide you with comprehensive information and practical tips specific to the fields of condensed-matter physics and materials science on creating a data management plan (DMP) that meets the DFG requirements and aligns your research with the FAIR data principles, the DFG code of conduct, and the EU open science policy. We will take you through the essential components of a DMP, provide tips on data management best practices, and offer guidance on appropriate tools and technologies. By the end of this guide, you will have the knowledge and tools necessary to create a thorough and effective DMP that not only meets the requirements of the DFG but also supports the long-term success of your research project. This guide follows the sections in the DFG checklist, and the questions to be addressed as required by the DFG are listed after each section. Although this guide is based on the requirements of the DFG, the information is not exclusive to any specific funding agency and can be used as a general guide for other research areas. Before preparing a DMP for your project, make sure to check the specific requirements for your funding agency, discipline, and research institution.">
                Abstract
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </main>

  <div class="modal-overlay" id="pub-modal">
    <div class="modal">
      <button class="modal-close" id="modal-close">&times;</button>
      <img src="" alt="TOC Figure" id="modal-toc" />
      <p id="modal-abstract"></p>
    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // category switching
      document.querySelectorAll('.pub-categories button').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelector('.pub-categories button.active').classList.remove('active');
          btn.classList.add('active');
          const cat = btn.dataset.cat;
          document.querySelectorAll('.pub-category-content').forEach(sec => {
            sec.classList.toggle('active', sec.dataset.cat === cat);
          });
        });
      });
      // year toggles
      document.querySelectorAll('.year-toggle').forEach(btn =>
        btn.addEventListener('click', () =>
          btn.nextElementSibling.classList.toggle('active')
        )
      );
      // abstract modal
      const modal = document.getElementById('pub-modal'),
            modalToc = document.getElementById('modal-toc'),
            modalAbs = document.getElementById('modal-abstract');
      document.querySelectorAll('.abstract-btn').forEach(btn =>
        btn.addEventListener('click', () => {
          modalToc.src = btn.dataset.toc;
          modalAbs.textContent = btn.dataset.abstract;
          modal.classList.add('active');
        })
      );
      document.getElementById('modal-close')
        .addEventListener('click', () => modal.classList.remove('active'));
      modal.addEventListener('click', e => {
        if (e.target === modal) modal.classList.remove('active');
      });
    });
  </script>

</body>
</html>
