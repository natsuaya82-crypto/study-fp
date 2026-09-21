window.FP_TEXTBOOK = window.FP_TEXTBOOK || {};
window.FP_TEXTBOOK.f6 = {
id:'f6', title:'相続・事業承継', short:'相続', color:'--f6',
topics:[
{id:'f6-01', title:'贈与の基礎と贈与税の課税財産', tags:[], blocks:[
 {t:'ul',x:[
  '<b>贈与契約</b>：<u>口頭でも成立する</u>。書面によらない贈与は、履行が終わっていない部分は撤回できる。',
  '<b>定期贈与</b>（毎年一定額を贈る契約）は、贈与者または受贈者の死亡で効力を失う。',
  '<b>負担付贈与</b>：受贈者に一定の債務を負担させる贈与。',
  '<b>死因贈与</b>：贈与者の死亡で効力が生じる。<u>贈与税ではなく相続税</u>の対象。',
  '<b>みなし贈与財産</b>：保険料を負担していない人が受け取る満期保険金、著しく低い価額での譲渡（低額譲受）、債務免除益など。',
  '<b>贈与税の非課税財産</b>：扶養義務者からの通常必要な生活費・教育費、社会通念上相当な香典・祝金・見舞金、法人からの贈与（＝<u>所得税</u>がかかる）、相続開始年に被相続人から受けた贈与（＝相続税の対象）。'
 ]},
 {t:'key',x:['死因贈与は相続税','法人からの贈与は所得税（一時所得）','贈与契約は口頭でも有効']}
]},
{id:'f6-02', title:'贈与税の計算と特例', tags:['超頻出'], blocks:[
 {t:'ul',x:[
  '<b>暦年課税</b>：1/1〜12/31に受けた贈与の合計 − <u>基礎控除110万円</u>。<u>受贈者ごと</u>に1年110万円（贈与者ごとではない）。',
  '<b>相続時精算課税</b>：原則<u>60歳以上</u>の父母・祖父母から<u>18歳以上</u>の子・孫への贈与。<u>年110万円の基礎控除</u>＋累計<u>2,500万円</u>の特別控除、超過分は一律<u>20%</u>。相続時に贈与財産を相続財産に加算して精算する（基礎控除110万円分は加算不要）。<u>いったん選択すると暦年課税に戻せない</u>。',
  '<b>贈与税の配偶者控除（おしどり贈与）</b>：婚姻期間<u>20年以上</u>の配偶者から居住用不動産または取得資金の贈与。<u>2,000万円</u>まで控除（基礎控除110万円と併用で2,110万円）。<u>同じ配偶者からは一生に1回</u>。',
  '<b>直系尊属からの住宅取得等資金の贈与</b>：省エネ等住宅1,000万円、それ以外500万円まで非課税。',
  '<b>教育資金の一括贈与</b>：1,500万円（学校等以外は500万円）まで非課税。受贈者30歳未満。',
  '<b>結婚・子育て資金の一括贈与</b>：1,000万円（結婚関係は300万円）まで非課税。',
  '<b>生前贈与加算</b>：相続または遺贈で財産を取得した人が、相続開始前<u>7年以内</u>（2024年以降の贈与から順次延長）に受けた贈与は相続財産に加算。延長された4年分については合計100万円まで加算しない。',
  '<b>申告期限</b>：贈与を受けた年の翌年<u>2月1日〜3月15日</u>。'
 ]},
 {t:'fig', cap:'父から300万・母から200万をもらった年の課税価格は（300＋200）−110＝390万円。贈与者ごとに110万円ではありません。', svg:'<svg viewBox="0 0 520 284" role="img" aria-label="暦年課税と相続時精算課税の対象者、控除、税率、相続時の扱いを比べた表"><g fill="currentColor" font-size="11.5"><text x="140" y="20" font-size="13" text-anchor="middle" class="fc-f" font-weight="700">暦年課税</text><text x="390" y="20" font-size="13" text-anchor="middle" class="ac-f" font-weight="700">相続時精算課税</text><text x="8" y="54" font-size="10.5" text-anchor="start" class="dim">だれからだれへ</text><rect x="112" y="34" width="178" height="28" rx="5" class="fc-f" opacity="0.16"/><text x="201" y="53" font-size="10" text-anchor="middle">だれでも</text><rect x="298" y="34" width="214" height="28" rx="5" class="ac-f" opacity="0.16"/><text x="405" y="53" font-size="10" text-anchor="middle">60歳以上の父母・祖父母 → 18歳以上の子・孫</text><text x="8" y="90" font-size="10.5" text-anchor="start" class="dim">基礎控除</text><rect x="112" y="70" width="178" height="28" rx="5" class="fc-f" opacity="0.16"/><text x="201" y="89" font-size="10" text-anchor="middle">年 110万円（もらう人ごと）</text><rect x="298" y="70" width="214" height="28" rx="5" class="ac-f" opacity="0.16"/><text x="405" y="89" font-size="10" text-anchor="middle">年 110万円</text><text x="8" y="126" font-size="10.5" text-anchor="start" class="dim">特別控除</text><rect x="112" y="106" width="178" height="28" rx="5" class="fc-f" opacity="0.16"/><text x="201" y="125" font-size="10" text-anchor="middle">なし</text><rect x="298" y="106" width="214" height="28" rx="5" class="ac-f" opacity="0.16"/><text x="405" y="125" font-size="10" text-anchor="middle">累計 2,500万円</text><text x="8" y="162" font-size="10.5" text-anchor="start" class="dim">超過分の税率</text><rect x="112" y="142" width="178" height="28" rx="5" class="fc-f" opacity="0.16"/><text x="201" y="161" font-size="10" text-anchor="middle">超過累進（10〜55%）</text><rect x="298" y="142" width="214" height="28" rx="5" class="ac-f" opacity="0.16"/><text x="405" y="161" font-size="10" text-anchor="middle">一律 20%</text><text x="8" y="198" font-size="10.5" text-anchor="start" class="dim">相続のとき</text><rect x="112" y="178" width="178" height="28" rx="5" class="fc-f" opacity="0.16"/><text x="201" y="197" font-size="10" text-anchor="middle">7年以内の贈与を加算</text><rect x="298" y="178" width="214" height="28" rx="5" class="ac-f" opacity="0.16"/><text x="405" y="197" font-size="10" text-anchor="middle">贈与財産を加算して精算</text><text x="8" y="234" font-size="10.5" text-anchor="start" class="dim">やめられる</text><rect x="112" y="214" width="178" height="28" rx="5" class="fc-f" opacity="0.16"/><text x="201" y="233" font-size="10" text-anchor="middle">—</text><rect x="298" y="214" width="214" height="28" rx="5" class="ac-f" opacity="0.16"/><text x="405" y="233" font-size="10" text-anchor="middle">いったん選ぶと戻れない</text><text x="260" y="272" font-size="12" text-anchor="middle" font-weight="700">110万円は「もらう人ごとに年110万円」。贈与者ごとではない</text></g></svg>'},
 {t:'ex',q:'父から300万円、母から200万円を同じ年に贈与された。贈与税の課税価格は？',a:'基礎控除110万円は受贈者ごとに年110万円。(300 + 200) − 110 ＝ <b>390万円</b>。「父から110万、母から110万」ではない。'},
 {t:'ex', q:'婚姻期間25年の妻へ、居住用不動産2,500万円を贈与した。贈与税の課税価格は？', a:'配偶者控除2,000万円＋基礎控除110万円＝2,110万円を控除。2,500 − 2,110 ＝ <b>390万円</b>。'},
 {t:'key',x:['110万円は「もらう人ごとに年1回」','おしどり贈与は20年・2,000万円・一生に1回','相続時精算課税は60歳→18歳、2,500万円、20%、戻れない','贈与税の申告は2/1〜3/15（所得税より半月早い）']}
]},
{id:'f6-03', title:'相続人と相続分', tags:['超頻出'], blocks:[
 {t:'ul',x:[
  '<b>相続順位</b>：配偶者は常に相続人。第1順位＝子、第2順位＝直系尊属、第3順位＝兄弟姉妹。<u>先順位がいれば後順位は相続人にならない</u>。',
  '<b>法定相続分</b>：',
  '　・配偶者と子 … 配偶者 1/2、子 1/2（子が複数なら均等）',
  '　・配偶者と直系尊属 … 配偶者 2/3、直系尊属 1/3',
  '　・配偶者と兄弟姉妹 … 配偶者 3/4、兄弟姉妹 1/4',
  '<b>代襲相続</b>：子が先に死亡していれば孫が代襲（再代襲あり）。兄弟姉妹の代襲は<u>甥・姪まで（再代襲なし）</u>。<u>相続放棄した人は代襲されない</u>。',
  '<b>養子</b>：実子と同じ扱い。<u>普通養子は実親・養親の双方</u>から相続できる。特別養子は実親との関係が終了。',
  '<b>非嫡出子</b>：嫡出子と同じ相続分。<b>胎児</b>：すでに生まれたものとみなす。',
  '<b>相続の承認・放棄</b>：自己のために相続の開始があったことを知った時から<u>3か月以内</u>。放棄は<u>単独</u>で家庭裁判所に申述、限定承認は<u>相続人全員で</u>。',
  '<b>相続放棄</b>をすると<u>はじめから相続人でなかった</u>ものとみなされる。'
 ]},
 {t:'fig', cap:'配偶者の取り分は、相手が子なら1/2、直系尊属なら2/3、兄弟姉妹なら3/4と増えていきます。', svg:'<svg viewBox="0 0 520 246" role="img" aria-label="相続人の組み合わせごとの法定相続分を帯グラフで示した図"><g fill="currentColor" font-size="11.5"><text x="8" y="50" font-size="11.5" text-anchor="start" font-weight="700">配偶者と子</text><rect x="140" y="28" width="180.0" height="34" rx="5" class="fc-f" opacity="0.32"/><rect x="320.0" y="28" width="180.0" height="34" rx="5" fill="currentColor" opacity="0.13"/><text x="230.0" y="50" font-size="11.5" text-anchor="middle" class="fc-f" font-weight="700">配偶者 1/2</text><text x="410.0" y="50" font-size="11.5" text-anchor="middle" font-weight="700">子 1/2</text><line x1="320.0" y1="24" x2="320.0" y2="66" stroke="currentColor" stroke-width="1.4" opacity="0.5"/><text x="8" y="114" font-size="11.5" text-anchor="start" font-weight="700">配偶者と直系尊属</text><rect x="140" y="92" width="240.0" height="34" rx="5" class="fc-f" opacity="0.32"/><rect x="380.0" y="92" width="120.0" height="34" rx="5" fill="currentColor" opacity="0.13"/><text x="260.0" y="114" font-size="11.5" text-anchor="middle" class="fc-f" font-weight="700">配偶者 2/3</text><text x="440.0" y="114" font-size="11.5" text-anchor="middle" font-weight="700">直系尊属 1/3</text><line x1="380.0" y1="88" x2="380.0" y2="130" stroke="currentColor" stroke-width="1.4" opacity="0.5"/><text x="8" y="178" font-size="11.5" text-anchor="start" font-weight="700">配偶者と兄弟姉妹</text><rect x="140" y="156" width="270.0" height="34" rx="5" class="fc-f" opacity="0.32"/><rect x="410.0" y="156" width="90.0" height="34" rx="5" fill="currentColor" opacity="0.13"/><text x="275.0" y="178" font-size="11.5" text-anchor="middle" class="fc-f" font-weight="700">配偶者 3/4</text><text x="455.0" y="178" font-size="11.5" text-anchor="middle" font-weight="700">兄弟姉妹 1/4</text><line x1="410.0" y1="152" x2="410.0" y2="194" stroke="currentColor" stroke-width="1.4" opacity="0.5"/><text x="140" y="216" font-size="11" text-anchor="start">同順位が複数いれば、その取り分を人数で均等に分ける</text><text x="140" y="234" font-size="11" text-anchor="start">相続放棄した人ははじめから相続人でなかったものとされ、代襲もしない</text></g></svg>'},
 {t:'ex',q:'被相続人に配偶者、長男、既に死亡した長女（その子＝孫が2人）。法定相続分は？',a:'配偶者 1/2。子の分 1/2 を長男と長女で均等 → 各 1/4。長女の 1/4 を孫2人が代襲相続して各 <b>1/8</b>。配偶者1/2、長男1/4、孫各1/8。'},
 {t:'ex',q:'被相続人に配偶者と父母のみ（子なし）。法定相続分は？',a:'配偶者 <b>2/3</b>、父母が 1/3 を均等に分けて各 <b>1/6</b>。'},
 {t:'key',x:['1/2・2/3・3/4（子・直系尊属・兄弟の順に配偶者の取り分が増える）','放棄は代襲されない／放棄は単独、限定承認は全員','3か月以内']}
]},
{id:'f6-04', title:'遺言と遺留分', tags:['頻出'], blocks:[
 {t:'table',head:['','自筆証書遺言','公正証書遺言','秘密証書遺言'],rows:[
  ['作成','本人が全文・日付・氏名を自書し押印（<u>財産目録はパソコン可</u>）','公証人が筆記','本人（パソコン可）'],
  ['証人','不要','<b>2人以上</b>','2人以上'],
  ['検認','<b>必要</b>（法務局保管制度を使えば<u>不要</u>）','<b>不要</b>','必要']
 ]},
 {t:'ul',x:[
  '証人になれない人：未成年者、推定相続人・受遺者とその配偶者・直系血族など。',
  '<b>遺留分</b>：兄弟姉妹<u>以外</u>の相続人にある。総体的遺留分は、相続人が直系尊属のみなら<u>1/3</u>、それ以外は<u>1/2</u>。個々の遺留分はこれに法定相続分を掛ける。',
  '<b>遺留分侵害額請求権</b>：相続の開始および侵害する贈与・遺贈を知った時から<u>1年</u>、相続開始から10年で時効。金銭の支払いを請求する権利。',
  '<b>遺産分割</b>：指定分割が協議分割に優先。現物分割・換価分割・代償分割。<u>分割協議はいつでもできる（期限なし）</u>が、相続税の特例適用には申告期限までの分割が必要（申告期限後3年以内の分割見込書で猶予可）。',
  '<b>配偶者居住権</b>：配偶者が被相続人所有の建物に住み続けられる権利。<u>登記が必要</u>で、譲渡はできない。'
 ]},
 {t:'fig', cap:'総体的遺留分（原則1/2、直系尊属のみ1/3）に自分の法定相続分を掛けたものが、その人の遺留分になります。', svg:'<svg viewBox="0 0 520 262" role="img" aria-label="相続人が配偶者と子2人の場合の遺留分の割合を帯で示した図"><g fill="currentColor" font-size="11.5"><text x="260" y="20" font-size="12.5" text-anchor="middle" class="fc-f" font-weight="700">相続人が 配偶者と子2人 のケース</text><rect x="60" y="34" width="400" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="260" y="56" font-size="11.5" text-anchor="middle">相続財産 全体</text><rect x="60" y="82" width="200" height="34" rx="5" class="fc-f" opacity="0.32"/><text x="160" y="104" font-size="12" text-anchor="middle" font-weight="700">総体的遺留分 1/2</text><rect x="260" y="82" width="200" height="34" rx="5" class="" opacity="0.1"/><text x="360" y="104" font-size="11" text-anchor="middle" class="dim">遺言で自由に処分できる</text><rect x="60" y="130" width="100" height="34" rx="5" class="ac-f" opacity="0.34"/><text x="110" y="152" font-size="11" text-anchor="middle" font-weight="700">配偶者 1/4</text><rect x="160" y="130" width="50" height="34" rx="5" class="ac-f" opacity="0.22"/><text x="185" y="152" font-size="10.5" text-anchor="middle" font-weight="700">子 1/8</text><rect x="210" y="130" width="50" height="34" rx="5" class="ac-f" opacity="0.22"/><text x="235" y="152" font-size="10.5" text-anchor="middle" font-weight="700">子 1/8</text><text x="260" y="186" font-size="12" text-anchor="middle" font-weight="700">総体的遺留分 × 法定相続分 = その人の遺留分</text><text x="260" y="208" font-size="11.5" text-anchor="middle">相続人が直系尊属だけなら総体的遺留分は 1/3</text><text x="260" y="228" font-size="12.5" text-anchor="middle" class="ng-f" font-weight="700">兄弟姉妹に遺留分はない</text><text x="260" y="250" font-size="11" text-anchor="middle">遺留分侵害額請求権は 知った時から1年・相続開始から10年で時効</text></g></svg>'},
 {t:'ex',q:'相続人が配偶者と子2人。全財産を第三者に遺贈する遺言があった。配偶者の遺留分は？',a:'総体的遺留分 1/2 × 配偶者の法定相続分 1/2 ＝ <b>1/4</b>。子は各 1/2 × 1/4 ＝ 1/8 ずつ。'},
 {t:'key',x:['公正証書遺言だけ検認不要','兄弟姉妹に遺留分はない','直系尊属のみ1/3、それ以外1/2']}
]},
{id:'f6-05', title:'相続税の課税財産と基礎控除', tags:['超頻出'], blocks:[
 {t:'ul',x:[
  '<b>本来の相続財産</b>：現預金、不動産、有価証券など。',
  '<b>みなし相続財産</b>：<u>死亡保険金</u>、<u>死亡退職金</u>（死亡後3年以内に支給が確定したもの）。',
  '<b>非課税枠</b>：死亡保険金・死亡退職金とも <b>500万円 × 法定相続人の数</b>。<u>相続放棄した人・相続人以外が受け取ると適用されない</u>（ただし法定相続人の数には放棄した人も含める）。',
  '<b>弔慰金</b>：業務上の死亡は賞与を除く<u>普通給与の3年分</u>、業務外は<u>6か月分</u>まで非課税。',
  '<b>債務控除</b>：借入金、未払いの医療費、未払いの税金は控除<u>できる</u>。<u>葬式費用（通夜・本葬・火葬・お布施）は控除できる</u>。<u>香典返しの費用、法要（初七日・四十九日）の費用、墓地・仏壇の購入費用は控除できない</u>。',
  '<b>非課税財産</b>：墓地・墓石・仏壇仏具、国等への寄付。',
  '<b>遺産に係る基礎控除</b>＝<b>3,000万円 ＋ 600万円 × 法定相続人の数</b>',
  '<b>法定相続人の数</b>：相続放棄があっても<u>放棄がなかったもの</u>として数える。養子は<u>実子がいる場合1人、いない場合2人</u>まで。'
 ]},
 {t:'fig', cap:'相続人が3人なら3,000万＋600万×3＝4,800万円。ここを超えた部分にだけ相続税がかかります。死亡保険金・死亡退職金の非課税枠500万円×法定相続人の数は、これとは別枠です。', svg:'<svg viewBox="0 0 520 224" role="img" aria-label="遺産総額から基礎控除を引いた残りが課税遺産総額になることを示す図"><g fill="currentColor" font-size="11.5"><text x="260" y="20" font-size="12.5" text-anchor="middle" class="fc-f" font-weight="700">基礎控除 = 3,000万円 + 600万円 × 法定相続人の数</text><rect x="20" y="34" width="480" height="38" rx="6" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="260" y="58" font-size="11.5" text-anchor="middle">遺産総額（法定相続人が3人のケース）</text><rect x="20" y="94" width="150" height="44" rx="5" class="fc-f" opacity="0.3"/><rect x="20" y="94" width="150" height="44" rx="5" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="95.0" y="121" font-size="11" text-anchor="middle">3,000万円</text><rect x="170" y="94" width="60" height="44" rx="5" class="fc-f" opacity="0.24"/><rect x="170" y="94" width="60" height="44" rx="5" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="200.0" y="121" font-size="11" text-anchor="middle">600万</text><rect x="230" y="94" width="60" height="44" rx="5" class="fc-f" opacity="0.24"/><rect x="230" y="94" width="60" height="44" rx="5" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="260.0" y="121" font-size="11" text-anchor="middle">600万</text><rect x="290" y="94" width="60" height="44" rx="5" class="fc-f" opacity="0.24"/><rect x="290" y="94" width="60" height="44" rx="5" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="320.0" y="121" font-size="11" text-anchor="middle">600万</text><rect x="350" y="94" width="150" height="44" rx="5" fill="currentColor" opacity="0.1"/><rect x="350" y="94" width="150" height="44" rx="5" fill="none" stroke="currentColor" stroke-width="0.8"/><text x="425.0" y="121" font-size="11" text-anchor="middle">課税遺産総額</text><line x1="20" y1="148" x2="350" y2="148" stroke="currentColor" stroke-width="1.6" class="fc-s"/><text x="185" y="166" font-size="12.5" text-anchor="middle" class="fc-f" font-weight="700">基礎控除 4,800万円（ここまで非課税）</text><text x="425" y="166" font-size="11.5" text-anchor="middle" font-weight="700">ここに相続税がかかる</text><text x="260" y="192" font-size="11.5" text-anchor="middle" font-weight="700">相続放棄した人も「人数」には含めて数える</text><text x="260" y="212" font-size="11.5" text-anchor="middle">養子は 実子がいれば1人まで、実子がいなければ2人まで</text></g></svg>'},
 {t:'ex',q:'相続人が妻・長男・長女の3人。うち長女が相続放棄。遺産に係る基礎控除額は？',a:'放棄はなかったものとして数えるので法定相続人は3人。3,000 + 600 × 3 ＝ <b>4,800万円</b>。'},
 {t:'ex',q:'被相続人に実子1人、養子2人。基礎控除の計算上の法定相続人の数は？',a:'実子がいるので養子は1人まで。1 + 1 ＝ <b>2人</b>。3,000 + 600 × 2 ＝ 4,200万円。'},
 {t:'key',x:['3,000万＋600万×法定相続人','放棄は「なかったもの」として数える（数のときだけ）','実子あり→養子1人、実子なし→養子2人','香典返し・法要・墓地購入は債務控除できない']}
]},
{id:'f6-06', title:'相続税の計算と税額控除', tags:['超頻出'], blocks:[
 {t:'p',x:'相続税は「①課税遺産総額を出す → ②<b>法定相続分で分けたと仮定</b>して各人の税額を出す → ③合計して相続税の総額 → ④実際の取得割合で按分 → ⑤各人の税額控除」という流れ。②で実際の分け方を使わないのがポイント。'},
 {t:'ul',x:[
  '<b>2割加算</b>：配偶者・1親等の血族（子・父母）以外が取得した場合、税額が2割増し。<u>兄弟姉妹、孫（代襲相続人である孫を除く）</u>が対象。<u>孫養子も2割加算の対象</u>。',
  '<b>配偶者に対する相続税額の軽減</b>：配偶者の取得額が「<u>1億6,000万円</u>」または「<u>配偶者の法定相続分相当額</u>」のいずれか<u>多い</u>金額まで相続税がかからない。<u>適用には申告が必要</u>（税額0でも申告する）。婚姻期間の要件はない。',
  '<b>未成年者控除</b>：10万円 ×（18歳 − 相続開始時の年齢）。<b>障害者控除</b>：10万円（特別障害者20万円）×（85歳 − 年齢）。',
  '<b>相次相続控除</b>：10年以内に続けて相続があった場合。',
  '<b>申告期限</b>：相続の開始があったことを知った日の翌日から<u>10か月以内</u>。被相続人の住所地の税務署。',
  '<b>準確定申告</b>：被相続人の所得税の申告。<u>4か月以内</u>。',
  '<b>延納</b>：金銭一括納付が困難な場合に分割。<b>物納</b>：延納でも困難な場合に現物で納付。'
 ]},
 {t:'steps', x:[{t:'課税遺産総額を出す', d:'遺産総額 − 債務・葬式費用 − 基礎控除（3,000万円＋600万円×法定相続人の数）。'},{t:'法定相続分で分けたと仮定する', d:'実際の分け方ではなく<b>法定相続分</b>で按分し、各人の仮の取得額に税率をかける。ここが最大のポイント。'},{t:'足して相続税の総額を出す', d:'仮に計算した各人の税額を合計する。'},{t:'実際の取得割合で按分する', d:'相続税の総額を、実際に取得した財産の割合で割り振る。'},{t:'各人の税額控除を引く', d:'配偶者の税額軽減、未成年者控除、障害者控除など。2割加算がある人はここで加算。'}]},
 {t:'fig', cap:'配偶者と1親等の血族（子・父母）以外が取得したら2割加算。孫養子は対象で、代襲相続人の孫は対象外という対比が出ます。', svg:'<svg viewBox="0 0 520 238" role="img" aria-label="相続税額の2割加算の対象になる人とならない人を左右に分けた図"><g fill="currentColor" font-size="11.5"><defs><marker id="a606" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs><text x="260" y="18" font-size="12.5" text-anchor="middle" class="fc-f" font-weight="700">相続税額が 2割増しになる人</text><text x="140" y="40" font-size="12" text-anchor="middle" class="ac-f" font-weight="700">加算されない</text><text x="390" y="40" font-size="12" text-anchor="middle" class="ng-f" font-weight="700">2割加算される</text><line x1="260" y1="48" x2="260" y2="186" stroke="currentColor" stroke-width="1" opacity="0.3"/><rect x="20" y="58" width="224" height="26" rx="5" class="ac-f" opacity="0.16"/><text x="132" y="76" font-size="11" text-anchor="middle">配偶者</text><rect x="20" y="90" width="224" height="26" rx="5" class="ac-f" opacity="0.16"/><text x="132" y="108" font-size="11" text-anchor="middle">子（1親等）</text><rect x="20" y="122" width="224" height="26" rx="5" class="ac-f" opacity="0.16"/><text x="132" y="140" font-size="11" text-anchor="middle">父母（1親等）</text><rect x="20" y="154" width="224" height="26" rx="5" class="ac-f" opacity="0.16"/><text x="132" y="172" font-size="11" text-anchor="middle">代襲相続人である孫</text><rect x="276" y="58" width="224" height="26" rx="5" class="ng-f" opacity="0.16"/><text x="388" y="76" font-size="11" text-anchor="middle">兄弟姉妹</text><rect x="276" y="90" width="224" height="26" rx="5" class="ng-f" opacity="0.16"/><text x="388" y="108" font-size="11" text-anchor="middle">代襲相続人でない孫</text><rect x="276" y="122" width="224" height="26" rx="5" class="ng-f" opacity="0.16"/><text x="388" y="140" font-size="11" text-anchor="middle">孫養子</text><rect x="276" y="154" width="224" height="26" rx="5" class="ng-f" opacity="0.16"/><text x="388" y="172" font-size="11" text-anchor="middle">受遺者（相続人以外）</text><text x="260" y="206" font-size="12" text-anchor="middle" font-weight="700">配偶者と1親等の血族 以外は 2割加算、と覚える</text><text x="260" y="226" font-size="11.5" text-anchor="middle">孫養子は加算される。代襲相続人である孫は加算されない</text></g></svg>'},
 {t:'ex',q:'配偶者が法定相続分どおり1億円を取得した（法定相続分1/2、遺産2億円）。配偶者の相続税は？',a:'1億6,000万円と法定相続分相当額1億円の「多いほう」＝1億6,000万円まで非課税。取得額1億円はその範囲内なので<b>納税額0</b>。ただし申告は必要。'},
 {t:'key',x:['1億6,000万円 or 法定相続分の「多いほう」','相続税は10か月、準確定申告は4か月','孫養子・兄弟姉妹は2割加算']}
]},
{id:'f6-07', title:'財産の評価', tags:['超頻出'], blocks:[
 {t:'ul',x:[
  '<b>宅地の評価</b>：<u>路線価方式</u>（市街地）と<u>倍率方式</u>（郊外）。',
  '　・<b>自用地</b>＝路線価 × 奥行価格補正率 × 地積',
  '　・<b>借地権</b>＝自用地評価額 × 借地権割合',
  '　・<b>貸宅地</b>（土地を貸している）＝自用地評価額 ×（1 − 借地権割合）',
  '　・<b>貸家建付地</b>（自分の土地にアパートを建てて貸す）＝自用地評価額 ×（1 − 借地権割合 × 借家権割合 × 賃貸割合）',
  '<b>建物</b>：自用家屋＝固定資産税評価額 × 1.0。<b>貸家</b>＝固定資産税評価額 ×（1 − 借家権割合 × 賃貸割合）。借家権割合は全国一律30%。',
  '<b>小規模宅地等の特例</b>：',
  '　・<u>特定居住用宅地等</u>… <b>330㎡</b>まで <b>80%</b>減',
  '　・<u>特定事業用宅地等</u>… <b>400㎡</b>まで <b>80%</b>減',
  '　・<u>貸付事業用宅地等</u>… <b>200㎡</b>まで <b>50%</b>減',
  '　特定居住用と特定事業用は<u>完全併用可（合計730㎡）</u>。貸付事業用を使う場合は調整計算が必要。適用には<u>申告が必要</u>。',
  '<b>上場株式</b>：①課税時期の終値 ②課税時期の月の毎日の終値の平均 ③前月の平均 ④前々月の平均 のうち<u>最も低い価額</u>。',
  '<b>生命保険契約に関する権利</b>：解約返戻金相当額。<b>ゴルフ会員権</b>：取引価格の70%。'
 ]},
 {t:'fig', cap:'330・400・200と80%・80%・50%の組み合わせ。税額が0になる場合でも、適用を受けるには申告が要ります。', svg:'<svg viewBox="0 0 520 258" role="img" aria-label="小規模宅地等の特例の限度面積と減額割合を3つの区分で比べた図"><g fill="currentColor" font-size="11.5"><text x="8" y="40" font-size="11.5" text-anchor="start" font-weight="700">特定居住用宅地等</text><text x="8" y="56" font-size="9.5" text-anchor="start" class="dim">自宅の敷地</text><rect x="170" y="26" width="247.5" height="28" rx="5" class="fc-f" opacity="0.3"/><text x="293.75" y="45" font-size="11.5" text-anchor="middle" font-weight="700">330平米まで</text><text x="500" y="46" font-size="15" text-anchor="end" class="fc-f" font-weight="700">80%減</text><text x="8" y="98" font-size="11.5" text-anchor="start" font-weight="700">特定事業用宅地等</text><text x="8" y="114" font-size="9.5" text-anchor="start" class="dim">店舗や工場の敷地</text><rect x="170" y="84" width="300.0" height="28" rx="5" class="ac-f" opacity="0.3"/><text x="320.0" y="103" font-size="11.5" text-anchor="middle" font-weight="700">400平米まで</text><text x="500" y="104" font-size="15" text-anchor="end" class="ac-f" font-weight="700">80%減</text><text x="8" y="156" font-size="11.5" text-anchor="start" font-weight="700">貸付事業用宅地等</text><text x="8" y="172" font-size="9.5" text-anchor="start" class="dim">アパートや駐車場</text><rect x="170" y="142" width="150.0" height="28" rx="5" class="mk-f" opacity="0.3"/><text x="245.0" y="161" font-size="11.5" text-anchor="middle" font-weight="700">200平米まで</text><text x="500" y="162" font-size="15" text-anchor="end" class="mk-f" font-weight="700">50%減</text><line x1="8" y1="206" x2="512" y2="206" stroke="currentColor" stroke-width="1" opacity="0.3"/><text x="260" y="226" font-size="12" text-anchor="middle" font-weight="700">居住用と事業用は完全併用できて 合計730平米</text><text x="260" y="246" font-size="11" text-anchor="middle">貸付用を混ぜるときは調整計算が必要。適用には相続税の申告が必要</text></g></svg>'},
 {t:'ex',q:'自用地評価額1億円、借地権割合60%、借家権割合30%、賃貸割合100%のアパート敷地。評価額は？',a:'貸家建付地＝1億 ×（1 − 0.6 × 0.3 × 1.0）＝ 1億 × 0.82 ＝ <b>8,200万円</b>。'},
 {t:'ex',q:'特定居住用宅地等400㎡（評価額8,000万円）に小規模宅地等の特例を適用。減額される額は？',a:'330㎡までが対象。8,000万 × (330 ÷ 400) × 80% ＝ 6,600万 × 80% ＝ <b>5,280万円の減額</b>。評価額は2,720万円になる。'},
 {t:'key',x:['居住330㎡/80%、事業400㎡/80%、貸付200㎡/50%','貸家建付地＝自用地 ×（1 − 借地権割合 × 借家権割合 × 賃貸割合）','上場株式は4つのうち最も低い価額']}
]}
]};
