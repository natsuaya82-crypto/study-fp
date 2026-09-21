window.FP_TEXTBOOK = window.FP_TEXTBOOK || {};
window.FP_TEXTBOOK.f3 = {
id:'f3', title:'金融資産運用', short:'金融', color:'--f3',
topics:[
{id:'f3-01', title:'経済指標と金融政策', tags:['頻出'], blocks:[
 {t:'ul',x:[
  '<b>GDP</b>：内閣府が四半期ごとに公表。<u>支出面で最大の項目は民間最終消費支出</u>（GDPの約5〜6割）。',
  '<b>景気動向指数</b>：内閣府。<u>先行</u>（新規求人数、東証株価指数、新設住宅着工床面積など）、<u>一致</u>（有効求人倍率、鉱工業生産指数など）、<u>遅行</u>（完全失業率、法人税収入など）。CI（量感）とDI（方向）。',
  '<b>日銀短観</b>：日本銀行が四半期ごと。注目されるのは「<u>業況判断DI</u>」。',
  '<b>消費者物価指数（CPI）</b>：総務省。<u>消費税を含む</u>。<b>企業物価指数</b>：日本銀行。CPIより変動が大きい。',
  '<b>マネーストック</b>：日本銀行。金融機関と中央政府を<u>除く</u>経済主体が保有する通貨の総量。',
  '<b>金融政策</b>：買いオペ（資金供給→金利低下）、売りオペ（資金吸収→金利上昇）。'
 ]},
 {t:'fig', cap:'先行は景気の先ぶれ、一致は景気そのもの、遅行は後追い。完全失業率が遅行、有効求人倍率が一致です。', svg:'<svg viewBox="0 0 520 222" role="img" aria-label="景気動向指数の先行系列、一致系列、遅行系列が時間差をもって動くことを示す図"><g fill="currentColor" font-size="11.5"><defs><marker id="a301" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs><line x1="30" y1="150" x2="500" y2="150" stroke="currentColor" stroke-width="1.2"/><text x="265" y="170" font-size="10.5" text-anchor="middle">時間 →</text><path d="M 60 58 Q 74 30 144 48 Q 214 66 294 34" fill="none" stroke="currentColor" stroke-width="2" class="fc-f" opacity="0.85"/><text x="8" y="52" font-size="11" text-anchor="start" class="fc-f" font-weight="700">先行系列</text><text x="500" y="52" font-size="10" text-anchor="end"></text><text x="265" y="74" font-size="9.5" text-anchor="middle" class="dim">新規求人数・東証株価指数・新設住宅着工床面積</text><path d="M 60 94 Q 130 66 200 84 Q 270 102 350 70" fill="none" stroke="currentColor" stroke-width="2" class="ac-f" opacity="0.85"/><text x="8" y="88" font-size="11" text-anchor="start" class="ac-f" font-weight="700">一致系列</text><text x="500" y="88" font-size="10" text-anchor="end"></text><text x="265" y="110" font-size="9.5" text-anchor="middle" class="dim">有効求人倍率・鉱工業生産指数</text><path d="M 60 130 Q 186 102 256 120 Q 326 138 406 106" fill="none" stroke="currentColor" stroke-width="2" class="ng-f" opacity="0.85"/><text x="8" y="124" font-size="11" text-anchor="start" class="ng-f" font-weight="700">遅行系列</text><text x="500" y="124" font-size="10" text-anchor="end"></text><text x="265" y="146" font-size="9.5" text-anchor="middle" class="dim">完全失業率・法人税収入</text><line x1="200" y1="26" x2="200" y2="150" stroke="currentColor" stroke-width="1" opacity="0.35"/><text x="200" y="166" font-size="10.5" text-anchor="middle" font-weight="700">山</text><text x="265" y="192" font-size="11.5" text-anchor="middle" font-weight="700">先行が先に動き、一致が景気そのもの、遅行が後からついてくる</text><text x="265" y="210" font-size="11" text-anchor="middle">完全失業率は遅行、有効求人倍率は一致。ここが混同しやすい</text></g></svg>'},
 {t:'ex',q:'完全失業率は景気動向指数のどの系列？',a:'遅行系列。景気の谷を過ぎてから改善するため。有効求人倍率は一致系列なので混同注意。'},
 {t:'key',x:['先行＝新規求人数・株価・住宅着工／一致＝有効求人倍率／遅行＝完全失業率','CPIは総務省・消費税込み、企業物価指数は日銀','買いオペ＝金利低下']}
]},
{id:'f3-02', title:'預貯金とセーフティネット', tags:[], blocks:[
 {t:'ul',x:[
  '<b>預金保険制度</b>：1金融機関ごとに預金者1人あたり<u>元本1,000万円までとその利息</u>を保護。',
  '<b>決済用預金</b>（無利息・要求払い・決済サービス）は<u>全額保護</u>。',
  '<u>外貨預金・譲渡性預金は保護の対象外</u>。',
  '<b>投資者保護基金</b>：証券会社の破綻時、1人あたり<u>1,000万円</u>まで補償。ただし分別管理されていれば顧客資産はそのまま戻る。',
  '<b>単利</b>：元本にのみ利息。<b>複利</b>：利息にも利息。同じ利率なら複利のほうが有利で、<u>半年複利 ＞ 1年複利</u>。'
 ]},
 {t:'fig', cap:'決済用預金は全額、一般の預貯金は元本1,000万円とその利息まで。外貨預金は対象外というのが引っかけどころです。', svg:'<svg viewBox="0 0 520 254" role="img" aria-label="預金保険制度で保護される範囲を、決済用預金、一般の預貯金、外貨預金で比べた図"><g fill="currentColor" font-size="11.5"><text x="260" y="20" font-size="12.5" text-anchor="middle" class="fc-f" font-weight="700">1金融機関ごと・預金者1人あたり</text><text x="8" y="52" font-size="11" text-anchor="start" font-weight="700">決済用預金（無利息・要求払い・決済サービス）</text><rect x="8" y="60" width="384" height="26" rx="5" fill="none" stroke="currentColor" stroke-width="1"/><rect x="8" y="60" width="384.0" height="26" rx="5" class="ac-f" opacity="0.3"/><text x="504" y="78" font-size="11" text-anchor="end" class="ac-f" font-weight="700">全額保護</text><text x="8" y="106" font-size="11" text-anchor="start" font-weight="700">普通預金・定期預金など</text><rect x="8" y="114" width="384" height="26" rx="5" fill="none" stroke="currentColor" stroke-width="1"/><rect x="8" y="114" width="238.08" height="26" rx="5" class="fc-f" opacity="0.3"/><text x="504" y="132" font-size="11" text-anchor="end" class="fc-f" font-weight="700">元本1,000万円 + その利息</text><text x="8" y="160" font-size="11" text-anchor="start" font-weight="700">外貨預金・譲渡性預金</text><rect x="8" y="168" width="384" height="26" rx="5" fill="none" stroke="currentColor" stroke-width="1"/><text x="504" y="186" font-size="11" text-anchor="end" class="ng-f" font-weight="700">対象外</text><line x1="8" y1="202" x2="512" y2="202" stroke="currentColor" stroke-width="1" opacity="0.3"/><text x="260" y="224" font-size="11.5" text-anchor="middle" font-weight="700">証券会社の破綻には 投資者保護基金（1人1,000万円まで）</text><text x="260" y="242" font-size="11" text-anchor="middle">ただし分別管理されていれば顧客の資産はそのまま戻る</text></g></svg>'},
 {t:'key',x:['1,000万円＋利息、決済用預金は全額','外貨預金は預金保険の対象外']}
]},
{id:'f3-03', title:'債券', tags:['超頻出','計算'], blocks:[
 {t:'p',x:'債券は「利回り計算」と「価格と金利の関係」がほぼ毎回出ます。'},
 {t:'ul',x:[
  '<b>表面利率（クーポンレート）</b>：額面に対する年間利息の割合。発行時に決まり変わらない。',
  '<b>最終利回り</b>＝〔表面利率 ＋（額面 − 購入価格）÷ 残存年数〕÷ 購入価格 × 100',
  '<b>所有期間利回り</b>＝〔表面利率 ＋（売却価格 − 購入価格）÷ 所有年数〕÷ 購入価格 × 100',
  '<b>金利が上がると債券価格は下がり、利回りは上がる</b>（逆相関）。残存期間が長いほど価格変動は大きい。',
  '<b>格付け</b>：<u>BBB（トリプルB）以上が投資適格</u>、BB以下は投機的。格付けが低い＝信用リスク大＝価格が低く利回りは高い。',
  '<b>個人向け国債</b>：変動10年・固定5年・固定3年。最低金利<u>年0.05%</u>保証、1万円単位、発行後<u>1年経過すれば中途換金可</u>。'
 ]},
 {t:'fig', cap:'金利と債券価格は必ず逆に動きます。利回りは価格と逆、つまり金利と同じ向きです。', svg:'<svg viewBox="0 0 520 220" role="img" aria-label="市場金利が上がると債券価格が下がるというシーソーの関係を示す図"><g fill="currentColor" font-size="11.5"><defs><marker id="a303" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs><polygon points="230,124 212,158 248,158" fill="currentColor" opacity="0.5"/><line x1="72" y1="96" x2="388" y2="152" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><circle cx="72" cy="96" r="30" class="ng-f" opacity="0.18"/><text x="72" y="92" font-size="13" text-anchor="middle" font-weight="700">市場金利</text><text x="72" y="110" font-size="12" text-anchor="middle" class="ng-f" font-weight="700">上がる</text><circle cx="388" cy="152" r="30" class="fc-f" opacity="0.18"/><text x="388" y="148" font-size="13" text-anchor="middle" font-weight="700">債券価格</text><text x="388" y="166" font-size="12" text-anchor="middle" class="fc-f" font-weight="700">下がる</text><line x1="72" y1="58" x2="72" y2="34" stroke="currentColor" stroke-width="1.6" class="ng-s" marker-end="url(#a303)"/><text x="230" y="26" font-size="11" text-anchor="middle">金利が上がると、いま持っている低い利率の債券は魅力が下がる</text><text x="230" y="190" font-size="12" text-anchor="middle" font-weight="700">価格が下がるほど、そこから買う人の利回りは上がる</text><text x="230" y="208" font-size="11" text-anchor="middle">残存期間が長い債券ほど値動きは大きい</text></g></svg>'},
 {t:'ex',q:'表面利率1.5%、残存3年、購入価格101円の債券の最終利回りは？',a:'〔1.5 +（100 − 101）÷ 3〕÷ 101 × 100 ＝（1.5 − 0.3333）÷ 101 × 100 ≒ <b>1.16%</b>。'},
 {t:'ex',q:'表面利率2%、購入価格98円、2年保有して100円で売却。所有期間利回りは？',a:'〔2 +（100 − 98）÷ 2〕÷ 98 × 100 ＝ 3 ÷ 98 × 100 ≒ <b>3.06%</b>。'},
 {t:'key',x:['分母はいつも「購入価格」','金利↑ → 価格↓ → 利回り↑','BBB以上が投資適格']}
]},
{id:'f3-04', title:'株式と投資指標', tags:['超頻出','計算'], blocks:[
 {t:'ul',x:[
  '<b>受渡し</b>：売買成立日を含めて<u>3営業日目</u>（約定日＋2営業日）。',
  '<b>指値注文と成行注文</b>：<u>成行注文が指値注文に優先</u>（成行優先）。同じ指値なら早い注文が優先（時間優先）。',
  '<b>日経平均株価</b>：東証プライムの225銘柄の修正平均。<u>値がさ株の影響を受けやすい</u>。',
  '<b>TOPIX</b>：時価総額加重型。<u>時価総額の大きい銘柄の影響を受けやすい</u>。',
  '<b>PER（株価収益率）</b>＝株価 ÷ 1株当たり純利益（EPS）。低いほど割安。',
  '<b>PBR（株価純資産倍率）</b>＝株価 ÷ 1株当たり純資産（BPS）。1倍が解散価値の目安。',
  '<b>ROE（自己資本利益率）</b>＝当期純利益 ÷ 自己資本 × 100。高いほど効率がよい。',
  '<b>配当利回り</b>＝1株当たり年間配当金 ÷ 株価 × 100。<b>配当性向</b>＝配当金総額 ÷ 当期純利益 × 100。',
  '<b>自己資本比率</b>＝自己資本 ÷ 総資産 × 100。高いほど安全性が高い。'
 ]},
 {t:'fig', cap:'PERは利益から見た割高割安、PBRは純資産から見た割高割安。ROEは株価と関係なく、会社が自己資本をどれだけ効率よく使ったかを示します。', svg:'<svg viewBox="0 0 520 234" role="img" aria-label="株価を1株当たり純利益で割るとPER、1株当たり純資産で割るとPBRになる関係を示す図"><g fill="currentColor" font-size="11.5"><defs><marker id="a304" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs><rect x="196" y="24" width="128" height="40" rx="8" fill="none" stroke="currentColor" stroke-width="1.6" class="fc-s"/><text x="260" y="49" font-size="14" text-anchor="middle" class="fc-f" font-weight="700">株価</text><rect x="30" y="140" width="150" height="40" rx="8" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="105" y="159" font-size="10.5" text-anchor="middle">1株当たり純利益</text><text x="105" y="174" font-size="10.5" text-anchor="middle" class="dim">EPS</text><rect x="340" y="140" width="150" height="40" rx="8" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="415" y="159" font-size="10.5" text-anchor="middle">1株当たり純資産</text><text x="415" y="174" font-size="10.5" text-anchor="middle" class="dim">BPS</text><line x1="230" y1="70" x2="120" y2="134" stroke="currentColor" stroke-width="1.4" marker-end="url(#a304)"/><text x="150" y="104" font-size="12" text-anchor="middle" class="fc-f" font-weight="700">÷ で PER</text><line x1="290" y1="70" x2="400" y2="134" stroke="currentColor" stroke-width="1.4" marker-end="url(#a304)"/><text x="374" y="104" font-size="12" text-anchor="middle" class="fc-f" font-weight="700">÷ で PBR</text><line x1="190" y1="160" x2="330" y2="160" stroke="currentColor" stroke-width="1.4" class="ac-s" marker-end="url(#a304)"/><text x="260" y="152" font-size="11.5" text-anchor="middle" class="ac-f" font-weight="700">純利益 ÷ 自己資本 = ROE</text><text x="260" y="204" font-size="11.5" text-anchor="middle" font-weight="700">PERもPBRも「株価 ÷ 1株当たり◯◯」。低いほど割安</text><text x="260" y="222" font-size="11" text-anchor="middle">ROEの分母は自己資本。総資産ではない</text></g></svg>'},
 {t:'ex',q:'株価1,500円、当期純利益30億円、発行済株式数2,000万株、純資産300億円、年間配当30円。PER・PBR・配当利回りは？',a:'EPS＝30億÷2,000万＝150円 → PER＝1,500÷150＝<b>10倍</b>。BPS＝300億÷2,000万＝1,500円 → PBR＝1,500÷1,500＝<b>1.0倍</b>。配当利回り＝30÷1,500×100＝<b>2%</b>。'},
 {t:'key',x:['PERもPBRも「株価 ÷ 1株当たり◯◯」','ROEの分母は自己資本（総資産ではない）','成行優先・時間優先・価格優先']}
]},
{id:'f3-05', title:'投資信託', tags:['頻出'], blocks:[
 {t:'ul',x:[
  '<b>基準価額</b>＝純資産総額 ÷ 総口数。1日1つだけ算出される。',
  '<b>コスト</b>：購入時手数料（ノーロードは無料）、<u>運用管理費用（信託報酬）＝保有中に毎日差し引かれる</u>、信託財産留保額（解約時に信託財産に残す）。',
  '<b>パッシブ運用</b>＝ベンチマークに連動。<b>アクティブ運用</b>＝ベンチマークを上回ることを目指す（信託報酬は高め）。',
  '<b>トップダウン・アプローチ</b>＝マクロ経済から銘柄へ。<b>ボトムアップ</b>＝個別企業の分析から。',
  '<b>グロース型</b>＝成長性重視。<b>バリュー型</b>＝割安さ重視（PER・PBRが低い銘柄）。',
  '<b>ETF</b>：上場投資信託。取引所でリアルタイムに指値・成行で売買可。<b>J-REIT</b>：不動産投資信託、上場。',
  '<b>分配金</b>：普通分配金＝課税、<u>元本払戻金（特別分配金）＝非課税</u>で個別元本が下がる。',
  '<b>単位型（ユニット型）</b>は募集期間のみ購入可、<b>追加型（オープン型）</b>はいつでも可。'
 ]},
 {t:'fig', cap:'分配金500円のうち、個別元本を上回る部分だけが普通分配金として課税されます。残りは元本の払い戻しなので非課税です。', svg:'<svg viewBox="0 0 520 238" role="img" aria-label="投資信託の分配金のうち個別元本を上回る部分が普通分配金として課税され、下回る部分が元本払戻金として非課税になることを示す図"><g fill="currentColor" font-size="11.5"><defs><marker id="a305" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs><line x1="40" y1="180" x2="500" y2="180" stroke="currentColor" stroke-width="1.2"/><rect x="70" y="64" width="150" height="116" rx="4" class="fc-f" opacity="0.24"/><text x="145" y="58" font-size="11" text-anchor="middle" font-weight="700">分配前 10,300円</text><line x1="60" y1="110" x2="480" y2="110" stroke="currentColor" stroke-width="1.6" class="ng-s"/><text x="494" y="106" font-size="10" text-anchor="end" class="ng-f" font-weight="700">個別元本</text><text x="494" y="122" font-size="10" text-anchor="end" class="ng-f">10,000円</text><rect x="290" y="90" width="150" height="90" rx="4" class="fc-f" opacity="0.24"/><text x="365" y="84" font-size="11" text-anchor="middle" font-weight="700">分配後 9,800円</text><rect x="240" y="64" width="30" height="46" rx="3" class="ac-f" opacity="0.4"/><text x="255" y="54" font-size="10" text-anchor="middle" class="ac-f" font-weight="700">300</text><rect x="240" y="110" width="30" height="30" rx="3" class="mk-f" opacity="0.45"/><text x="255" y="156" font-size="10" text-anchor="middle" font-weight="700">200</text><line x1="220" y1="120" x2="236" y2="120" stroke="currentColor" stroke-width="1.2" marker-end="url(#a305)"/><text x="150" y="206" font-size="11.5" text-anchor="middle" class="ac-f" font-weight="700">個別元本より上の 300円 = 普通分配金 → 課税</text><text x="390" y="206" font-size="11.5" text-anchor="middle" font-weight="700">元本を割り込む 200円 = 元本払戻金 → 非課税</text><text x="260" y="226" font-size="11" text-anchor="middle">元本払戻金を受け取ると、その分だけ個別元本が下がる</text></g></svg>'},
 {t:'ex',q:'個別元本10,000円の投信が、決算で500円分配し基準価額が9,800円になった。分配金の課税は？',a:'分配後の基準価額9,800円 < 個別元本10,000円。分配前が10,300円だったとすると、10,300→9,800のうち個別元本10,000を下回る200円が元本払戻金（非課税）、300円が普通分配金（課税）。'},
 {t:'key',x:['信託報酬は保有期間中ずっとかかる','特別分配金（元本払戻金）は非課税','ETF・J-REITは上場、指値できる']}
]},
{id:'f3-06', title:'外貨建て商品', tags:['頻出','計算'], blocks:[
 {t:'ul',x:[
  '<b>TTS（対顧客電信売相場）</b>：銀行が顧客に外貨を<u>売る</u>レート＝円を外貨に替えるとき（預入時）。',
  '<b>TTB（対顧客電信買相場）</b>：銀行が顧客から外貨を<u>買う</u>レート＝外貨を円に戻すとき（払戻時）。',
  'TTM（仲値）を挟んで TTS ＞ TTM ＞ TTB。差が為替手数料。',
  '<b>円安</b>（1ドル100円→120円）になると外貨建て資産の円換算額は<u>増える</u>（為替差益）。',
  '<b>外貨預金</b>：利息は利子所得（源泉分離20.315%）、<u>為替差益は雑所得で総合課税</u>（予約なしの場合）。',
  '<u>外貨預金は預金保険制度の対象外</u>。',
  '<b>外国為替証拠金取引（FX）</b>：差金決済。レバレッジをかけられ、損失が証拠金を上回ることもある。'
 ]},
 {t:'fig', cap:'Sell（銀行が売る）でTTS、Buy（銀行が買う）でTTB。為替が動かなくても往復で手数料ぶん目減りします。', svg:'<svg viewBox="0 0 520 200" role="img" aria-label="円を外貨に替えるときはTTS、外貨を円に戻すときはTTBが使われ、その差が為替手数料になることを示す図"><g fill="currentColor" font-size="11.5"><defs><marker id="a306" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs><rect x="18" y="40" width="130" height="52" rx="10" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="83" y="72" font-size="14" text-anchor="middle" font-weight="700">円</text><rect x="372" y="40" width="130" height="52" rx="10" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="437" y="72" font-size="14" text-anchor="middle" font-weight="700">外貨</text><line x1="156" y1="54" x2="364" y2="54" stroke="currentColor" stroke-width="1.8" class="fc-s" marker-end="url(#a306)"/><text x="260" y="45" font-size="12.5" text-anchor="middle" class="fc-f" font-weight="700">TTS</text><text x="260" y="30" font-size="11" text-anchor="middle" class="fc-f">預け入れるとき</text><line x1="364" y1="80" x2="156" y2="80" stroke="currentColor" stroke-width="1.8" marker-end="url(#a306)"/><text x="260" y="96" font-size="12.5" text-anchor="middle" font-weight="700">TTB</text><text x="260" y="111" font-size="11" text-anchor="middle">円に戻すとき</text><line x1="60" y1="150" x2="460" y2="150" stroke="currentColor" stroke-width="1.2"/><line x1="110" y1="143" x2="110" y2="157" stroke="currentColor" stroke-width="1.4"/><text x="110" y="138" font-size="11.5" text-anchor="middle" font-weight="700">TTB</text><text x="110" y="172" font-size="10.5" text-anchor="middle" class="dim">安い</text><line x1="260" y1="143" x2="260" y2="157" stroke="currentColor" stroke-width="1.4"/><text x="260" y="138" font-size="11.5" text-anchor="middle" font-weight="700">TTM</text><text x="260" y="172" font-size="10.5" text-anchor="middle" class="dim">仲値</text><line x1="410" y1="143" x2="410" y2="157" stroke="currentColor" stroke-width="1.4" class="fc-s"/><text x="410" y="138" font-size="11.5" text-anchor="middle" class="fc-f" font-weight="700">TTS</text><text x="410" y="172" font-size="10.5" text-anchor="middle" class="dim">高い</text><text x="260" y="192" font-size="11" text-anchor="middle">この幅が為替手数料。往復すると両方ぶん取られる</text></g></svg>'},
 {t:'ex',q:'TTS＝131円、TTB＝129円。10,000ドルの外貨預金を作り、満期に利息なしで円に戻した。損益は？',a:'預入時：10,000 × 131 ＝ 1,310,000円。払戻時：10,000 × 129 ＝ 1,290,000円。為替変動がなくても<b>20,000円の手数料負担</b>。'},
 {t:'key',x:['預けるときTTS（Sell＝銀行が売る）、戻すときTTB（Buy）','外貨預金の為替差益は雑所得・総合課税']}
]},
{id:'f3-07', title:'ポートフォリオとデリバティブ', tags:[], blocks:[
 {t:'ul',x:[
  '<b>期待収益率</b>：各シナリオの収益率 × 確率 の合計。ポートフォリオ全体の期待収益率は<u>各資産の期待収益率を組入比率で加重平均</u>したもの。',
  '<b>相関係数</b>：−1 〜 +1。<u>−1に近いほど分散投資のリスク低減効果が大きい</u>。+1（完全相関）だとリスク低減効果はない。',
  '<b>シャープレシオ</b>＝（ポートフォリオ収益率 − 無リスク資産利子率）÷ 標準偏差。<u>大きいほど効率的</u>。',
  '<b>システマティック・リスク</b>（市場リスク）は分散投資で消せない。<b>非システマティック・リスク</b>（個別銘柄リスク）は分散で減らせる。',
  '<b>オプション</b>：コール＝買う権利、プット＝売る権利。<u>買い手は権利を放棄でき損失はプレミアムに限定</u>、売り手の損失は限定されない。',
  '一般に、<u>満期までの期間が長いほど、原資産のボラティリティが高いほどプレミアムは高くなる</u>。'
 ]},
 {t:'fig', cap:'相関係数が-1に近いほど値動きが打ち消し合い、リスク低減効果が大きくなります。+1では効果がありません。', svg:'<svg viewBox="0 0 520 212" role="img" aria-label="相関係数がマイナス1、0、プラス1のときに2つの資産の値動きがどう打ち消し合うかを示す図"><g fill="currentColor" font-size="11.5"><text x="90" y="20" font-size="12" text-anchor="middle" class="fc-f" font-weight="700">相関係数 -1</text><line x1="14" y1="110" x2="166" y2="110" stroke="currentColor" stroke-width="1"/><polyline points="14.0,110.0 23.5,98.5 33.0,89.8 42.5,86.1 52.0,88.2 61.5,95.6 71.0,106.6 80.5,118.4 90.0,128.2 99.5,133.5 109.0,133.0 118.5,126.9 128.0,116.7 137.5,104.8 147.0,94.2 156.5,87.5 166.0,86.3" fill="none" stroke="currentColor" stroke-width="1.8" opacity="0.8"/><polyline points="14.0,110.0 23.5,121.5 33.0,130.2 42.5,133.9 52.0,131.8 61.5,124.4 71.0,113.4 80.5,101.6 90.0,91.8 99.5,86.5 109.0,87.0 118.5,93.1 128.0,103.3 137.5,115.2 147.0,125.8 156.5,132.5 166.0,133.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="4 3" class="fc-f"/><text x="90" y="152" font-size="10.5" text-anchor="middle"> リスク低減効果が最大</text><text x="260" y="20" font-size="12" text-anchor="middle" class="ac-f" font-weight="700">相関係数 0</text><line x1="184" y1="110" x2="336" y2="110" stroke="currentColor" stroke-width="1"/><polyline points="184.0,110.0 193.5,98.5 203.0,89.8 212.5,86.1 222.0,88.2 231.5,95.6 241.0,106.6 250.5,118.4 260.0,128.2 269.5,133.5 279.0,133.0 288.5,126.9 298.0,116.7 307.5,104.8 317.0,94.2 326.5,87.5 336.0,86.3" fill="none" stroke="currentColor" stroke-width="1.8" opacity="0.8"/><polyline points="184.0,94.0 193.5,95.6 203.0,100.2 212.5,106.7 222.0,113.9 231.5,120.3 241.0,124.6 250.5,126.0 260.0,124.1 269.5,119.3 279.0,112.7 288.5,105.5 298.0,99.2 307.5,95.1 317.0,94.1 326.5,96.2 336.0,101.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="4 3" class="ac-f"/><text x="260" y="152" font-size="10.5" text-anchor="middle">ある程度の低減効果</text><text x="430" y="20" font-size="12" text-anchor="middle" class="ng-f" font-weight="700">相関係数 +1</text><line x1="354" y1="110" x2="506" y2="110" stroke="currentColor" stroke-width="1"/><polyline points="354.0,110.0 363.5,98.5 373.0,89.8 382.5,86.1 392.0,88.2 401.5,95.6 411.0,106.6 420.5,118.4 430.0,128.2 439.5,133.5 449.0,133.0 458.5,126.9 468.0,116.7 477.5,104.8 487.0,94.2 496.5,87.5 506.0,86.3" fill="none" stroke="currentColor" stroke-width="1.8" opacity="0.8"/><polyline points="354.0,110.0 363.5,98.5 373.0,89.8 382.5,86.1 392.0,88.2 401.5,95.6 411.0,106.6 420.5,118.4 430.0,128.2 439.5,133.5 449.0,133.0 458.5,126.9 468.0,116.7 477.5,104.8 487.0,94.2 496.5,87.5 506.0,86.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="4 3" class="ng-f"/><text x="430" y="152" font-size="10.5" text-anchor="middle">低減効果なし</text><text x="260" y="180" font-size="11.5" text-anchor="middle" font-weight="700">実線と破線が逆に動くほど、合計した値動きは小さくなる</text><text x="260" y="200" font-size="11" text-anchor="middle">分散投資で消せないのが市場リスク（システマティック・リスク）</text></g></svg>'},
 {t:'ex',q:'A資産（期待収益率5%）を60%、B資産（同2%）を40%組み入れたポートフォリオの期待収益率は？',a:'5% × 0.6 + 2% × 0.4 ＝ 3.0 + 0.8 ＝ <b>3.8%</b>。'},
 {t:'ex', q:'収益率5%、標準偏差4%、無リスク資産の利子率1%のポートフォリオのシャープレシオは？', a:'(5 − 1) ÷ 4 ＝ <b>1.0</b>。同じ収益率でも標準偏差が大きいほど値は小さくなる＝効率が悪い。'},
 {t:'key',x:['相関係数は −1 に近いほどよい','シャープレシオは大きいほど効率的','オプションの買い手は損失限定、売り手は無限定']}
]},
{id:'f3-08', title:'金融商品の税金とNISA', tags:['超頻出'], blocks:[
 {t:'ul',x:[
  '<b>税率</b>：上場株式の譲渡益・配当、公募株式投信の譲渡益・分配金、特定公社債の利子・譲渡益はいずれも<u>20.315%</u>（所得税15% + 復興特別所得税0.315% + 住民税5%）。',
  '<b>申告分離課税</b>：上場株式等の譲渡所得。損失は<u>翌年以後3年間繰越控除</u>できる（確定申告が必要）。',
  '<b>配当</b>：総合課税を選べば<u>配当控除</u>が使える。申告分離課税を選べば<u>上場株式等の譲渡損失と損益通算</u>できる。申告不要も選べる。',
  '<b>特定口座（源泉徴収あり）</b>：証券会社が計算・納税。原則、確定申告不要。',
  '<b>NISA</b>：<u>つみたて投資枠 年120万円</u>、<u>成長投資枠 年240万円</u>、あわせて年間360万円。<u>非課税保有限度額は1,800万円</u>（うち成長投資枠は1,200万円まで）。非課税期間は無期限、制度も恒久化。',
  'NISA口座で生じた<u>損失は、他の口座の利益と損益通算できず、繰越控除もできない</u>。',
  '売却すると、その商品の<u>簿価（取得価額）分の枠が翌年以降に復活</u>する。'
 ]},
 {t:'fig', cap:'つみたて120万＋成長240万で年360万円、総枠1,800万円（うち成長投資枠は1,200万円まで）。最大の注意点は、損失がなかったものとされることです。', svg:'<svg viewBox="0 0 520 212" role="img" aria-label="NISAの年間投資枠と生涯の非課税保有限度額の内訳を示す図"><g fill="currentColor" font-size="11.5"><defs><marker id="a308" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs><text x="150" y="20" font-size="12" text-anchor="middle" font-weight="700">1年あたりの投資枠</text><rect x="24" y="32" width="252" height="44" rx="6" class="fc-f" opacity="0.3"/><text x="150" y="59" font-size="11.5" text-anchor="middle" font-weight="700">つみたて投資枠 120万円</text><rect x="24" y="84" width="252" height="44" rx="6" class="ac-f" opacity="0.3"/><text x="150" y="111" font-size="11.5" text-anchor="middle" font-weight="700">成長投資枠 240万円</text><line x1="18" y1="32" x2="18" y2="128" stroke="currentColor" stroke-width="2" class="fc-s"/><text x="150" y="148" font-size="13" text-anchor="middle" class="fc-f" font-weight="700">あわせて年 360万円</text><text x="400" y="20" font-size="12" text-anchor="middle" font-weight="700">生涯の非課税保有限度額</text><rect x="310" y="32" width="190" height="96" rx="6" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="310" y="74" width="190" height="54" rx="0" class="ac-f" opacity="0.3"/><text x="405" y="105" font-size="10.5" text-anchor="middle">うち成長投資枠 1,200万円</text><text x="405" y="58" font-size="12.5" text-anchor="middle" font-weight="700">総額 1,800万円</text><text x="400" y="148" font-size="12" text-anchor="middle" class="fc-f" font-weight="700">非課税期間は無期限</text><text x="260" y="180" font-size="11.5" text-anchor="middle" font-weight="700">売却すると、その商品の簿価（取得価額）ぶんの枠が翌年以降に復活する</text><text x="260" y="200" font-size="11.5" text-anchor="middle" class="ng-f" font-weight="700">NISA口座の損失は損益通算も繰越控除もできない（なかったものとされる）</text></g></svg>'},
 {t:'ex',q:'NISAの成長投資枠で買った株を売って50万円の損失が出た。特定口座の30万円の利益と相殺できる？',a:'できない。NISA口座の損失は税務上ないものとされ、損益通算も繰越控除も不可。これがNISAの最大の注意点。'},
 {t:'key',x:['20.315%（15%＋0.315%＋5%）','NISA：120万＋240万＝360万／総枠1,800万（成長1,200万）','NISAの損失は「なかったもの」']}
]},
{id:'f3-09', title:'金融商品の関連法規', tags:[], blocks:[
 {t:'ul',x:[
  '<b>金融サービス提供法</b>：重要事項の説明義務違反で顧客に損害が出たら<u>損害賠償責任</u>。元本欠損額が損害額と推定される。',
  '<b>消費者契約法</b>：事業者の不適切な勧誘（誤認・困惑）による契約を<u>取り消せる</u>。個人のみ（事業者は対象外）。',
  '<b>金融商品取引法</b>：適合性の原則（顧客の知識・経験・財産に照らして不適当な勧誘をしてはならない）、断定的判断の提供の禁止、広告規制。',
  '両法の<u>どちらにも該当する場合は両方を適用できる</u>。'
 ]},
 {t:'fig', cap:'金融サービス提供法は損害賠償、消費者契約法は契約の取消し。効果がちがうので対で覚えます。', svg:'<svg viewBox="0 0 520 252" role="img" aria-label="金融商品取引法、金融サービス提供法、消費者契約法がそれぞれ何を定めているかを示す図"><g fill="currentColor" font-size="11.5"><defs><marker id="a309" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs><rect x="8" y="26" width="168" height="48" rx="8" class="fc-f" opacity="0.2"/><text x="92" y="47" font-size="11.5" text-anchor="middle" font-weight="700">金融商品取引法</text><text x="92" y="64" font-size="10" text-anchor="middle" class="dim">勧誘・販売のルール</text><line x1="182" y1="50" x2="208" y2="50" stroke="currentColor" stroke-width="1.3" marker-end="url(#a309)"/><rect x="214" y="26" width="298" height="48" rx="8" fill="none" stroke="currentColor" stroke-width="1"/><text x="363" y="55" font-size="10.5" text-anchor="middle">適合性の原則／断定的判断の提供の禁止／広告規制</text><rect x="8" y="88" width="168" height="48" rx="8" class="ac-f" opacity="0.2"/><text x="92" y="109" font-size="11.5" text-anchor="middle" font-weight="700">金融サービス提供法</text><text x="92" y="126" font-size="10" text-anchor="middle" class="dim">説明義務を怠ったとき</text><line x1="182" y1="112" x2="208" y2="112" stroke="currentColor" stroke-width="1.3" marker-end="url(#a309)"/><rect x="214" y="88" width="298" height="48" rx="8" fill="none" stroke="currentColor" stroke-width="1"/><text x="363" y="117" font-size="10.5" text-anchor="middle">損害賠償責任。元本欠損額が損害額と推定される</text><rect x="8" y="150" width="168" height="48" rx="8" class="mk-f" opacity="0.2"/><text x="92" y="171" font-size="11.5" text-anchor="middle" font-weight="700">消費者契約法</text><text x="92" y="188" font-size="10" text-anchor="middle" class="dim">不当な勧誘を受けたとき</text><line x1="182" y1="174" x2="208" y2="174" stroke="currentColor" stroke-width="1.3" marker-end="url(#a309)"/><rect x="214" y="150" width="298" height="48" rx="8" fill="none" stroke="currentColor" stroke-width="1"/><text x="363" y="179" font-size="10.5" text-anchor="middle">契約を取り消せる。個人のみ（事業者は対象外）</text><line x1="8" y1="218" x2="512" y2="218" stroke="currentColor" stroke-width="1" opacity="0.3"/><text x="260" y="240" font-size="12" text-anchor="middle" font-weight="700">どちらにも当てはまる場合は 両方を適用できる</text></g></svg>'},
 {t:'key',x:['金融サービス提供法＝損害賠償、消費者契約法＝契約の取消し','消費者契約法は個人だけが対象']}
]}
]};
