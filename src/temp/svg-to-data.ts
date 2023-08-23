import { Point, Rect } from '../types.js'

const walkSvg  =`
<rect id="bg" x="166" y="239" fill="#00FFFF" width="180" height="33"/>
<g id="frame0">
	<circle id="shoulder_x5F_back" fill="#002A60" cx="177.5" cy="257.5" r="1.5"/>
	<circle id="elbow_x5F_back" fill="#002A60" cx="176.5" cy="259.5" r="1.5"/>
	<circle id="hand_x5F_back" fill="#002A60" cx="174" cy="262" r="2"/>
	<circle id="hip_x5F_back" fill="#008A31" cx="178" cy="264" r="2"/>
	<circle id="knee_x5F_back" fill="#008A31" cx="179.5" cy="266.5" r="1.5"/>
	<circle id="heel_x5F_back" fill="#008A31" cx="180.5" cy="270.5" r="1.5"/>
	<rect id="torso" x="171" y="255" fill="#FF052B" width="8" height="9"/>
	<circle id="shoulder_x5F_front" fill="#0043E6" cx="173.5" cy="257.5" r="1.5"/>
	<circle id="elbow_x5F_front" fill="#0043E6" cx="174.5" cy="259.5" r="1.5"/>
	<circle id="hand_x5F_front" fill="#0043E6" cx="177" cy="262" r="2"/>
	<circle id="hip_x5F_front" fill="#F2DE00" cx="173" cy="264" r="2"/>
	<circle id="knee_x5F_front" fill="#F2DE00" cx="171.5" cy="266.5" r="1.5"/>
	<circle id="heel_x5F_front" fill="#F2DE00" cx="168.5" cy="270.5" r="1.5"/>
</g>
<g id="frame1">
	
		<circle id="shoulder_x5F_back_00000092442484108395033920000006860620408364514451_" fill="#002A60" cx="194.5" cy="258.5" r="1.5"/>
	<circle id="elbow_x5F_back_00000120553182165620353950000000555209039641100728_" fill="#002A60" cx="192.5" cy="258.5" r="1.5"/>
	<circle id="hand_x5F_back_00000111150001865657902750000012762886160785906566_" fill="#002A60" cx="190" cy="260" r="2"/>
	<circle id="hip_x5F_back_00000108291306564555182080000010739285443054662314_" fill="#008A31" cx="195" cy="265" r="2"/>
	<circle id="knee_x5F_back_00000128463104084829144360000006279377669029788337_" fill="#008A31" cx="195.5" cy="267.5" r="1.5"/>
	<circle id="heel_x5F_back_00000030469291442608400400000015224969917433528453_" fill="#008A31" cx="194.5" cy="270.5" r="1.5"/>
	<rect id="torso_00000000210033930041667960000008563728725746062992_" x="189" y="256" fill="#FF052B" width="8" height="9"/>
	
		<circle id="shoulder_x5F_front_00000016072785851109576120000001584117762077071274_" fill="#0043E6" cx="192.5" cy="258.5" r="1.5"/>
	<circle id="elbow_x5F_front_00000016071123153666630630000010713000434371249835_" fill="#0043E6" cx="193.5" cy="259.5" r="1.5"/>
	<circle id="hand_x5F_front_00000152951079806959606350000002334552280269420717_" fill="#0043E6" cx="196" cy="262" r="2"/>
	<circle id="hip_x5F_front_00000026149534556956514610000015771998617528745134_" fill="#F2DE00" cx="191" cy="265" r="2"/>
	<circle id="knee_x5F_front_00000122712016819392814830000003809894926736091046_" fill="#F2DE00" cx="189.5" cy="266.5" r="1.5"/>
	<circle id="heel_x5F_front_00000060719235125907011950000016855833416233586576_" fill="#F2DE00" cx="185.5" cy="266.5" r="1.5"/>
</g>
<g id="frame2">
	
		<circle id="shoulder_x5F_back_00000110441084064876641840000005830668345268574869_" fill="#002A60" cx="208.5" cy="257.5" r="1.5"/>
	<circle id="elbow_x5F_back_00000014626742140931776870000012193952082625639096_" fill="#002A60" cx="208.5" cy="260.5" r="1.5"/>
	<circle id="hand_x5F_back_00000165935314299974166650000002379565874864670364_" fill="#002A60" cx="212" cy="262" r="2"/>
	<circle id="hip_x5F_back_00000125565671016739369250000017853723494594602907_" fill="#008A31" cx="211" cy="264" r="2"/>
	<circle id="knee_x5F_back_00000034802351334869036410000013160727382250946460_" fill="#008A31" cx="211.5" cy="267.5" r="1.5"/>
	<circle id="heel_x5F_back_00000000182861475270795770000006423548200499761799_" fill="#008A31" cx="210.5" cy="270.5" r="1.5"/>
	<rect id="torso_00000069387674129238266580000010886777357775448498_" x="208" y="255" fill="#FF052B" width="7" height="9"/>
	
		<circle id="shoulder_x5F_front_00000127761945398281564110000004441814108303856804_" fill="#0043E6" cx="209.5" cy="257.5" r="1.5"/>
	<circle id="elbow_x5F_front_00000134234905430428662580000014533977531495112369_" fill="#0043E6" cx="211.5" cy="259.5" r="1.5"/>
	<circle id="hand_x5F_front_00000179624704832151799860000015803606513309425024_" fill="#0043E6" cx="214" cy="261" r="2"/>
	<circle id="hip_x5F_front_00000178918201004108817560000005646113219676353951_" fill="#F2DE00" cx="211" cy="264" r="2"/>
	<circle id="knee_x5F_front_00000119100902157807996830000005965933102261958312_" fill="#F2DE00" cx="212.5" cy="266.5" r="1.5"/>
	<circle id="heel_x5F_front_00000012432056243151807570000004423904316969466511_" fill="#F2DE00" cx="207.5" cy="266.5" r="1.5"/>
</g>
<g id="frame3">
	
		<circle id="shoulder_x5F_back_00000164479732091085730990000009271566360977934250_" fill="#002A60" cx="231.5" cy="256.5" r="1.5"/>
	<circle id="elbow_x5F_back_00000011734782152111887230000014119462339764009623_" fill="#002A60" cx="229.5" cy="258.5" r="1.5"/>
	<circle id="hand_x5F_back_00000101806164734440402720000013515125463998101129_" fill="#002A60" cx="233" cy="259" r="2"/>
	<circle id="hip_x5F_back_00000070796605002653491190000000288419760488109735_" fill="#008A31" cx="228" cy="264" r="2"/>
	<circle id="knee_x5F_back_00000018212160999771556090000011710112673376410284_" fill="#008A31" cx="227.5" cy="266.5" r="1.5"/>
	<circle id="heel_x5F_back_00000181789305376634346880000004653115988613662866_" fill="#008A31" cx="225.5" cy="270.5" r="1.5"/>
	<rect id="torso_00000168076876165167037450000001455216800890221227_" x="226" y="254" fill="#FF052B" width="7" height="9"/>
	
		<circle id="shoulder_x5F_front_00000125570176379655954590000011787152430873135234_" fill="#0043E6" cx="226.5" cy="256.5" r="1.5"/>
	<circle id="elbow_x5F_front_00000001656728169925535920000005894959547293937284_" fill="#0043E6" cx="226.5" cy="258.5" r="1.5"/>
	<circle id="hand_x5F_front_00000083050826078393613400000004623264538567815815_" fill="#0043E6" cx="229" cy="261" r="2"/>
	<circle id="hip_x5F_front_00000098221388440033050830000004305131572604666009_" fill="#F2DE00" cx="232" cy="264" r="2"/>
	<circle id="knee_x5F_front_00000042000474922555329190000012027748895147039918_" fill="#F2DE00" cx="231.5" cy="265.5" r="1.5"/>
	<circle id="heel_x5F_front_00000129184696471780170560000015230641018242528697_" fill="#F2DE00" cx="229.5" cy="266.5" r="1.5"/>
</g>
<g id="frame4">
	
		<circle id="shoulder_x5F_back_00000075866639778588501200000014707321495325789317_" fill="#002A60" cx="248.5" cy="255.5" r="1.5"/>
	<circle id="elbow_x5F_back_00000019651218667837229310000001994801305298509964_" fill="#002A60" cx="250.5" cy="257.5" r="1.5"/>
	<circle id="hand_x5F_back_00000044139376475308650720000006144601790096193410_" fill="#002A60" cx="251" cy="260" r="2"/>
	<circle id="hip_x5F_back_00000073708252469169023630000009870003398348871305_" fill="#008A31" cx="246" cy="264" r="2"/>
	<circle id="knee_x5F_back_00000124120078324873836570000007403584108712355724_" fill="#008A31" cx="244.5" cy="266.5" r="1.5"/>
	<circle id="heel_x5F_back_00000011754205926829140510000007409144515207613334_" fill="#008A31" cx="242.5" cy="270.5" r="1.5"/>
	<rect id="torso_00000086675596519910510380000014109342498110688388_" x="244" y="254" fill="#FF052B" width="7" height="9"/>
	
		<circle id="shoulder_x5F_front_00000135656452764068037860000016624954670482150063_" fill="#0043E6" cx="243.5" cy="256.5" r="1.5"/>
	<circle id="elbow_x5F_front_00000161613155175820875850000016219708958378764222_" fill="#0043E6" cx="243.5" cy="258.5" r="1.5"/>
	<circle id="hand_x5F_front_00000080184892251406353700000003312607898076274597_" fill="#0043E6" cx="245" cy="261" r="2"/>
	<circle id="hip_x5F_front_00000088828501955281050410000016780717347706272430_" fill="#F2DE00" cx="250" cy="264" r="2"/>
	<circle id="knee_x5F_front_00000069374780811746528950000017763110396279325354_" fill="#F2DE00" cx="250.5" cy="265.5" r="1.5"/>
	<circle id="heel_x5F_front_00000147179894401617630400000003227606656277262480_" fill="#F2DE00" cx="251.5" cy="268.5" r="1.5"/>
</g>
<g id="frame5">
	
		<circle id="shoulder_x5F_back_00000127722767252481345560000018083129313242980792_" fill="#002A60" cx="268.5" cy="256.5" r="1.5"/>
	<circle id="elbow_x5F_back_00000143575770753278595290000013507687464215301283_" fill="#002A60" cx="269.5" cy="257.5" r="1.5"/>
	<circle id="hand_x5F_back_00000083063395236888592450000008838253779809574031_" fill="#002A60" cx="270" cy="260" r="2"/>
	<circle id="hip_x5F_back_00000149362107165083095280000012113083623013300866_" fill="#008A31" cx="264" cy="265" r="2"/>
	<circle id="knee_x5F_back_00000044178163943191894340000018137790692762497453_" fill="#008A31" cx="262.5" cy="267.5" r="1.5"/>
	<circle id="heel_x5F_back_00000161608914900623287350000012454851608776120200_" fill="#008A31" cx="259.5" cy="270.5" r="1.5"/>
	<rect id="torso_00000183221983399291530920000001293157173850139272_" x="262" y="255" fill="#FF052B" width="7" height="9"/>
	
		<circle id="shoulder_x5F_front_00000173152780958402654650000016313466684922426529_" fill="#0043E6" cx="261.5" cy="256.5" r="1.5"/>
	<circle id="elbow_x5F_front_00000101061734388308774510000014544720989720743585_" fill="#0043E6" cx="260.5" cy="258.5" r="1.5"/>
	<circle id="hand_x5F_front_00000116949781212504183300000001047218686515996833_" fill="#0043E6" cx="260" cy="261" r="2"/>
	<circle id="hip_x5F_front_00000182519247440662420740000002003848213105481364_" fill="#F2DE00" cx="268" cy="265" r="2"/>
	<circle id="knee_x5F_front_00000093872976989971951660000001382958691496598665_" fill="#F2DE00" cx="268.5" cy="267.5" r="1.5"/>
	<circle id="heel_x5F_front_00000154414923126305699060000000758090999580373919_" fill="#F2DE00" cx="269.5" cy="270.5" r="1.5"/>
</g>
<g id="frame6">
	
		<circle id="shoulder_x5F_back_00000158746371394512902960000002113918464529124785_" fill="#002A60" cx="285.5" cy="257.5" r="1.5"/>
	<circle id="elbow_x5F_back_00000015319666349183223440000009027960416035189659_" fill="#002A60" cx="287.5" cy="258.5" r="1.5"/>
	<circle id="hand_x5F_back_00000013166054359192570790000007160251740756665011_" fill="#002A60" cx="289" cy="261" r="2"/>
	<circle id="hip_x5F_back_00000035508725788440509030000008056742431064785553_" fill="#008A31" cx="282" cy="267" r="2"/>
	<circle id="knee_x5F_back_00000029013179063017041080000005509624401413518515_" fill="#008A31" cx="280.5" cy="266.5" r="1.5"/>
	<circle id="heel_x5F_back_00000159455205343324924440000006811673688335032765_" fill="#008A31" cx="277.5" cy="266.5" r="1.5"/>
	<rect id="torso_00000085947529240771876910000005624651579460911777_" x="279" y="256" fill="#FF052B" width="8" height="9"/>
	
		<circle id="shoulder_x5F_front_00000119820036434955138220000014517296717351102905_" fill="#0043E6" cx="279.5" cy="257.5" r="1.5"/>
	<circle id="elbow_x5F_front_00000127729535656002492910000017231742763276246185_" fill="#0043E6" cx="277.5" cy="258.5" r="1.5"/>
	<circle id="hand_x5F_front_00000036241392432871955430000003725092898701975474_" fill="#0043E6" cx="276" cy="261" r="2"/>
	<circle id="hip_x5F_front_00000071543069090326013790000012735697556104145303_" fill="#F2DE00" cx="285" cy="265" r="2"/>
	<circle id="knee_x5F_front_00000178184532291007617810000015554760921031306140_" fill="#F2DE00" cx="284.5" cy="267.5" r="1.5"/>
	<circle id="heel_x5F_front_00000143606816198067215200000015863519028450878631_" fill="#F2DE00" cx="284.5" cy="270.5" r="1.5"/>
</g>
<g id="frame7">
	
		<circle id="shoulder_x5F_back_00000012471241306877408920000005284768855852402056_" fill="#002A60" cx="304.5" cy="256.5" r="1.5"/>
	<circle id="elbow_x5F_back_00000124142175990327322250000005539513922975753622_" fill="#002A60" cx="303.5" cy="257.5" r="1.5"/>
	<circle id="hand_x5F_back_00000098193549982559799900000007698209828597482664_" fill="#002A60" cx="306" cy="260" r="2"/>
	<circle id="hip_x5F_back_00000093858598875096440010000011948820464739297416_" fill="#008A31" cx="303" cy="265" r="2"/>
	<circle id="knee_x5F_back_00000108291289157851535490000005959835576819099298_" fill="#008A31" cx="301.5" cy="266.5" r="1.5"/>
	<circle id="heel_x5F_back_00000047026482292817930910000013141491304927301293_" fill="#008A31" cx="298.5" cy="266.5" r="1.5"/>
	<rect id="torso_00000134966239296888794190000015751957167790585780_" x="298" y="255" fill="#FF052B" width="7" height="9"/>
	
		<circle id="shoulder_x5F_front_00000132085380920014471160000005178944869225989810_" fill="#0043E6" cx="298.5" cy="256.5" r="1.5"/>
	<circle id="elbow_x5F_front_00000093165017922076934050000000707401479828122781_" fill="#0043E6" cx="296.5" cy="258.5" r="1.5"/>
	<circle id="hand_x5F_front_00000139282199476466785830000009949240110210847390_" fill="#0043E6" cx="295" cy="261" r="2"/>
	<circle id="hip_x5F_front_00000032627433400019310150000009956226957129715114_" fill="#F2DE00" cx="301" cy="265" r="2"/>
	<circle id="knee_x5F_front_00000122707801033870102940000007586354566671815087_" fill="#F2DE00" cx="300.5" cy="267.5" r="1.5"/>
	<circle id="heel_x5F_front_00000137098534108547544610000002490005976466674060_" fill="#F2DE00" cx="300.5" cy="270.5" r="1.5"/>
</g>
<g id="frame8">
	
		<circle id="shoulder_x5F_back_00000127731283188062712420000015122459824265278118_" fill="#002A60" cx="320.5" cy="256.5" r="1.5"/>
	<circle id="elbow_x5F_back_00000043454084915503770330000014399069200847001730_" fill="#002A60" cx="322.5" cy="257.5" r="1.5"/>
	<circle id="hand_x5F_back_00000012459607614745946920000010810501028058752918_" fill="#002A60" cx="323" cy="260" r="2"/>
	<circle id="hip_x5F_back_00000096765963761995526070000009845710760955592117_" fill="#008A31" cx="322" cy="263" r="2"/>
	<circle id="knee_x5F_back_00000024704426236690718780000012256920097338987666_" fill="#008A31" cx="320.5" cy="265.5" r="1.5"/>
	<circle id="heel_x5F_back_00000005268958519986243150000009727501085781712022_" fill="#008A31" cx="318.5" cy="267.5" r="1.5"/>
	<rect id="torso_00000053503392328655168890000010718031600662351247_" x="315" y="254" fill="#FF052B" width="8" height="9"/>
	
		<circle id="shoulder_x5F_front_00000024688288368157589130000005181846561067447443_" fill="#0043E6" cx="315.5" cy="256.5" r="1.5"/>
	<circle id="elbow_x5F_front_00000176724742375789954140000007549869048024251289_" fill="#0043E6" cx="314.5" cy="258.5" r="1.5"/>
	<circle id="hand_x5F_front_00000075158728186050554260000005874126105567786130_" fill="#0043E6" cx="314" cy="261" r="2"/>
	<circle id="hip_x5F_front_00000109003616698204222130000017602338437313022379_" fill="#F2DE00" cx="318" cy="264" r="2"/>
	<circle id="knee_x5F_front_00000132059603647880741420000003245759577619405185_" fill="#F2DE00" cx="317.5" cy="267.5" r="1.5"/>
	<circle id="heel_x5F_front_00000054951143988703402590000002329085692064319887_" fill="#F2DE00" cx="316.5" cy="270.5" r="1.5"/>
</g>
<g id="frame9">
	
		<circle id="shoulder_x5F_back_00000011033752241272957410000014625625081542357125_" fill="#002A60" cx="339.5" cy="256.5" r="1.5"/>
	<circle id="elbow_x5F_back_00000044894067015464760650000010550965947842298810_" fill="#002A60" cx="339.5" cy="257.5" r="1.5"/>
	<circle id="hand_x5F_back_00000160892690424802020370000018003151104690040227_" fill="#002A60" cx="340" cy="260" r="2"/>
	<circle id="hip_x5F_back_00000078756672563184868860000002849625745750491271_" fill="#008A31" cx="340" cy="263" r="2"/>
	<circle id="knee_x5F_back_00000149348347766273065020000011207766696336486534_" fill="#008A31" cx="340.5" cy="265.5" r="1.5"/>
	<circle id="heel_x5F_back_00000091732288732278761020000015605984358550448812_" fill="#008A31" cx="340.5" cy="268.5" r="1.5"/>
	<rect id="torso_00000042710112886490186270000011485774230585306288_" x="334" y="254" fill="#FF052B" width="7" height="9"/>
	
		<circle id="shoulder_x5F_front_00000126302588344888439590000000390419992367685257_" fill="#0043E6" cx="334.5" cy="256.5" r="1.5"/>
	<circle id="elbow_x5F_front_00000165914352071053378500000008002051992023578543_" fill="#0043E6" cx="333.5" cy="258.5" r="1.5"/>
	<circle id="hand_x5F_front_00000054945786749339216110000015049298812056948115_" fill="#0043E6" cx="334" cy="261" r="2"/>
	<circle id="hip_x5F_front_00000119113548855636545300000008264276344944241050_" fill="#F2DE00" cx="337" cy="264" r="2"/>
	<circle id="knee_x5F_front_00000047035561250072846180000015389484578477608118_" fill="#F2DE00" cx="335.5" cy="267.5" r="1.5"/>
	<circle id="heel_x5F_front_00000078747310658079534820000003858606949006530951_" fill="#F2DE00" cx="333.5" cy="270.5" r="1.5"/>
</g>
`

export const idleSvg = `
<rect id="bg" x="220" y="183" fill="#00FFFF" width="40" height="31"/>
<g id="idle0">	
		<circle id="shoulder_x5F_back_00000162337259224730914170000004373879752405461169_" fill="#002A60" cx="232.5" cy="198.5" r="1.5"/>
	<circle id="elbow_x5F_back_00000086666242899998325620000010629990403351044257_" fill="#002A60" cx="235.5" cy="200.5" r="1.5"/>
	<circle id="hand_x5F_back_00000103956311275182854090000007998970075096081548_" fill="#002A60" cx="233" cy="203" r="2"/>
	<circle id="hip_x5F_back_00000145045667672693314470000004051640010777985977_" fill="#008A31" cx="231" cy="207" r="2"/>
	<circle id="knee_x5F_back_00000174595637898068499620000013196590067488790702_" fill="#008A31" cx="232.5" cy="209.5" r="1.5"/>
	<circle id="heel_x5F_back_00000009586041053567179340000006055926382459011765_" fill="#008A31" cx="231.5" cy="212.5" r="1.5"/>
	<rect id="torso_00000161607284694737113140000016150113075758949521_" x="226" y="198" fill="#FF052B" width="7" height="9"/>
	
		<circle id="shoulder_x5F_front_00000117668571265114404390000001420490364872605596_" fill="#0043E6" cx="225.5" cy="198.5" r="1.5"/>
	<circle id="elbow_x5F_front_00000107579783472125238980000004499031786391360691_" fill="#0043E6" cx="221.5" cy="200.5" r="1.5"/>
	<circle id="hand_x5F_front_00000157274194084504346300000011950311090678948744_" fill="#0043E6" cx="225" cy="203" r="2"/>
	<circle id="hip_x5F_front_00000150076904667237610340000012820094658098138294_" fill="#F2DE00" cx="226" cy="207" r="2"/>
	<circle id="knee_x5F_front_00000060001006748012594690000005445342017636356485_" fill="#F2DE00" cx="224.5" cy="208.5" r="1.5"/>
	<circle id="heel_x5F_front_00000067210188026099689490000007018437243862682032_" fill="#F2DE00" cx="224.5" cy="212.5" r="1.5"/>
</g>
<g id="idle1">
	
		<circle id="shoulder_x5F_back_00000114051869558856971020000015677211077966898611_" fill="#002A60" cx="252.5" cy="199.5" r="1.5"/>
	<circle id="elbow_x5F_back_00000101782112691914172360000004446693884270158736_" fill="#002A60" cx="255.5" cy="201.5" r="1.5"/>
	<circle id="hand_x5F_back_00000011744510525366094740000004296319735689125511_" fill="#002A60" cx="253" cy="204" r="2"/>
	<circle id="hip_x5F_back_00000140717982852777164960000005776433239775978937_" fill="#008A31" cx="251" cy="208" r="2"/>
	<circle id="knee_x5F_back_00000106852795161506438740000008540754418125280654_" fill="#008A31" cx="252.5" cy="210.5" r="1.5"/>
	<circle id="heel_x5F_back_00000137827090781711675160000012581162346977720193_" fill="#008A31" cx="251.5" cy="212.5" r="1.5"/>
	<rect id="torso_00000058559939599661417180000009505509220050412196_" x="246" y="199" fill="#FF052B" width="7" height="9"/>
	
		<circle id="shoulder_x5F_front_00000086660040309038371150000015505054916904207267_" fill="#0043E6" cx="245.5" cy="199.5" r="1.5"/>
	<circle id="elbow_x5F_front_00000082337763314768293050000009094688998658207405_" fill="#0043E6" cx="241.5" cy="201.5" r="1.5"/>
	<circle id="hand_x5F_front_00000099649716885551488040000001260162031217428904_" fill="#0043E6" cx="245" cy="204" r="2"/>
	<circle id="hip_x5F_front_00000156561506557951146520000016130061498186073507_" fill="#F2DE00" cx="246" cy="208" r="2"/>
	<circle id="knee_x5F_front_00000036935891320087527230000012755702299771594120_" fill="#F2DE00" cx="244.5" cy="209.5" r="1.5"/>
	<circle id="heel_x5F_front_00000172431888942212951500000014972358105434108067_" fill="#F2DE00" cx="244.5" cy="212.5" r="1.5"/>
</g>
`

export const parseSvg = ( svgString = walkSvg ): Parsed => {
  const svgRootEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

  svgRootEl.innerHTML = svgString

  const bgEl = svgRootEl.querySelector('#bg') as SVGRectElement

  const bg = rectElToRect( bgEl )

  let xOff = -bg.x
  let yOff = -bg.y

  const frameEls = svgRootEl.querySelectorAll( 'g' )

  const frameWidth = Math.floor( bg.width / frameEls.length )

  const frames: Frame[] = []

  for( const g of frameEls ) {
    const f = parseGroup( g as SVGGElement )
    
    frames.push( translateFrame( f, xOff, yOff ))

    xOff -= frameWidth
  }

  return { bg, frames }  
}

const childIs = ( el: Element, ...search: string[] ) => 
  search.every( s => el.id.includes( s ) )

const circleElToPoint = ( el: SVGCircleElement ): Point => ({
  x: parseFloat( el.getAttribute( 'cx' )! ),
  y: parseFloat( el.getAttribute( 'cy' )! )
})

const rectElToRect = ( el: SVGRectElement ): Rect => ({
  x: parseFloat( el.getAttribute( 'x' )! ),
  y: parseFloat( el.getAttribute( 'y' )! ),
  width: parseFloat( el.getAttribute( 'width' )! ),
  height: parseFloat( el.getAttribute( 'height' )! )
})

// the ids follow a pattern, but have all kinds of nonsense tacked on
const parseGroup = ( g: SVGGElement ): Frame => {
  let shoulderBackEl: SVGCircleElement | undefined
  let elbowBackEl: SVGCircleElement | undefined
  let handBackEl: SVGCircleElement | undefined
  let hipBackEl: SVGCircleElement | undefined
  let kneeBackEl: SVGCircleElement | undefined
  let heelBackEl: SVGCircleElement | undefined
  let torsoEl: SVGRectElement | undefined
  let shoulderFrontEl: SVGCircleElement | undefined
  let elbowFrontEl: SVGCircleElement | undefined
  let handFrontEl: SVGCircleElement | undefined
  let hipFrontEl: SVGCircleElement | undefined
  let kneeFrontEl: SVGCircleElement | undefined
  let heelFrontEl: SVGCircleElement | undefined

  for( const child of g.children ) {
    if( childIs( child, 'shoulder', 'back') ){
      shoulderBackEl = child as SVGCircleElement
    }

    if( childIs( child, 'elbow', 'back') ){
      elbowBackEl = child as SVGCircleElement
    }

    if( childIs( child, 'hand', 'back') ){
      handBackEl = child as SVGCircleElement
    }

    if( childIs( child, 'hip', 'back') ){
      hipBackEl = child as SVGCircleElement
    }

    if( childIs( child, 'knee', 'back') ){
      kneeBackEl = child as SVGCircleElement
    }

    if( childIs( child, 'heel', 'back') ){
      heelBackEl = child as SVGCircleElement
    }

    if( childIs( child, 'torso') ){
      torsoEl = child as SVGRectElement
    }

    if( childIs( child, 'shoulder', 'front') ){
      shoulderFrontEl = child as SVGCircleElement
    }

    if( childIs( child, 'elbow', 'front') ){
      elbowFrontEl = child as SVGCircleElement
    }

    if( childIs( child, 'hand', 'front') ){
      handFrontEl = child as SVGCircleElement
    }

    if( childIs( child, 'hip', 'front') ){
      hipFrontEl = child as SVGCircleElement
    }

    if( childIs( child, 'knee', 'front') ){
      kneeFrontEl = child as SVGCircleElement
    }

    if( childIs( child, 'heel', 'front') ){
      heelFrontEl = child as SVGCircleElement
    }
  }

  if( shoulderBackEl === undefined ) throw Error( 'Missing shoulder back' )
  if( elbowBackEl === undefined ) throw Error( 'Missing elbow back' )
  if( handBackEl === undefined ) throw Error( 'Missing hand back' )
  if( hipBackEl === undefined ) throw Error( 'Missing hip back' )
  if( kneeBackEl === undefined ) throw Error( 'Missing knee back' )
  if( heelBackEl === undefined ) throw Error( 'Missing heel back' )
  if( torsoEl === undefined ) throw Error( 'Missing torso' )
  if( shoulderFrontEl === undefined ) throw Error( 'Missing shoulder front' )
  if( elbowFrontEl === undefined ) throw Error( 'Missing elbow front' )
  if( handFrontEl === undefined ) throw Error( 'Missing hand front' )
  if( hipFrontEl === undefined ) throw Error( 'Missing hip front' )
  if( kneeFrontEl === undefined ) throw Error( 'Missing knee front' )
  if( heelFrontEl === undefined ) throw Error( 'Missing heel front' )

  const shoulderBack = circleElToPoint( shoulderBackEl )
  const elbowBack = circleElToPoint( elbowBackEl )
  const handBack = circleElToPoint( handBackEl )
  const hipBack = circleElToPoint( hipBackEl )
  const kneeBack = circleElToPoint( kneeBackEl )
  const heelBack = circleElToPoint( heelBackEl )
  const torso = rectElToRect( torsoEl )
  const shoulderFront = circleElToPoint( shoulderFrontEl )
  const elbowFront = circleElToPoint( elbowFrontEl )
  const handFront = circleElToPoint( handFrontEl )
  const hipFront = circleElToPoint( hipFrontEl )
  const kneeFront = circleElToPoint( kneeFrontEl )
  const heelFront = circleElToPoint( heelFrontEl )

  return {
    shoulderBack, elbowBack, handBack, hipBack, kneeBack, heelBack,
    torso,
    shoulderFront, elbowFront, handFront, hipFront, kneeFront, heelFront
  }
}

// works for rect too
const translatePoint = ( point: Point, x: number, y: number ): Point => Object.assign({}, point, {
  x: point.x + x,
  y: point.y + y
})

const translateFrame = ( frame: Frame, x: number, y: number ) => {
  const newFrame: Frame = {} as any

  for( const key in frame ) {
    newFrame[ key ] = translatePoint( frame[ key ], x, y )    
  }

  return newFrame
}

export type Frame = {
  shoulderBack: Point
  elbowBack: Point
  handBack: Point
  hipBack: Point
  kneeBack: Point
  heelBack: Point
  torso: Rect
  shoulderFront: Point
  elbowFront: Point
  handFront: Point
  hipFront: Point
  kneeFront: Point
  heelFront: Point
}

export type Parsed = {
  bg: Rect
  frames: Frame[]
}