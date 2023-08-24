<template>
  <div class="upload-img-root">
    <el-row class="row">
      <el-col :span="8" :offset="8">
        <el-select v-show="connected" v-model="selectedSymbol" class="m-2" placeholder="Select" size="large">
          <el-option
            v-for="symbol in symbols"
            :key="symbol"
            :label="`${symbol} ${balanceStack[symbol]}`"
            :value="symbol"
          />
        </el-select>
      </el-col>
    </el-row>
    <el-row class="row">
      <span v-if="connected">Balance: {{balance}}</span>
    </el-row>
    <el-row class="row">
      <a href="https://app.everpay.io/deposit">Go to deposit by EverPay</a>
    </el-row>
    <hr>
    <el-row class="row">
      <el-col :span="4" :offset="10">
        <el-input v-model="datasetName" placeholder="Input Vector Dataset Name" />
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="4" :offset="10">
        <textarea  style="height:500px;width: 500px" v-model="datasetContent" placeholder="Input Vector Dataset Content" />
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="4" :offset="10">
        <el-input v-model="catalog" placeholder="Input the catalog" />
      </el-col>
    </el-row>

    <el-row class="row">
      <el-col :span="4" :offset="10">
        <el-input v-model="fileSource" placeholder="Input the file source link" />
      </el-col>
    </el-row>

    <el-row class="row">
      <el-button type="primary" @click="upload_payload()">Click to Upload the Vector Datset Item</el-button>
    </el-row>
    <el-row class="row">
      <el-col :span="8" :offset="10">
        <div
          v-for="(order, index) in orders"
          :key="index"
          class="order"
        >
          <!-- <a style="margin-right:10px;" target="_blank" :href="`${arseedUrl}/${order.itemId}`">{{order.itemId}}</a> -->
          <el-button
            type="primary"
            plain
            @click="copyTextToClipboard(`${arseedUrl}/${order.itemId}`)"
          >Copy Link of Gateway Link</el-button>
          <el-button
            class="view"
            type="success"
            plain
            @click="viewItem(`https://ai.movedid.build/?tx_id=${order.itemId}`)"
          >View by KNN3</el-button>
          <!-- <a target="_blank" :href="`https://arweave.net/${order.itemId}`">By arweave gateway(when onChainStatus pending or success)</a> -->
          <!-- <div>{{JSON.stringify(order, null, 2)}}</div> -->
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import Everpay from 'everpay'
import { getBundleFee, getOrders } from 'arseeding-js'
import Bignumber from 'bignumber.js'

// TODO: optimize here.
// const faasAxios = axios.create({
//   //baseURL: "http://localhost:4000/", // local
//   baseURL: 'https://faasbyleeduckgo.gigalixirapp.com', // online
//   headers: {
//     'Content-Type': 'application/json;charset=UTF-8',
//   },
// });

// import {payOrder} from "arseeding-js/cjs/payOrder";
function getArseedUrl() {
  let arseedUrl = "https://arseed.web3infra.dev"
  const hostname = window.location.hostname
  if ( hostname.split(".")[0].indexOf("dev") !== -1 || hostname === "localhost") { // test env
    arseedUrl = "https://arseed-dev.web3infra.dev"
  }
  return arseedUrl
}

export default {
  name: 'Upload',
  data() {
    return {
      submitResp: "",
      selectedSymbol: '',
      symbols: [],
      connected: false,
      instance: {},
      everpay: {},
      balance: '',
      orders: [],
      balanceStack: {},
      arseedUrl: getArseedUrl(),
      payload: {},
      url: "",
      // gistId: '',
      // gistOwnerId: '', 
      datasetName: '', 
      datasetContent: '',
      fileSource: '',
      catalog: '',
    };
  },
  watch: {
    selectedSymbol() {
      if (this.everpay.balance && this.selectedSymbol && window.ethereum.selectedAddress) {
        this.everpay.balance({
          symbol: this.selectedSymbol,
          account: window.ethereum.selectedAddress
        }).then(result => {
          this.balance = result
        })
      }
    }
  },
  methods: {
    async upload_payload() {
      const fee = await getBundleFee(this.arseedUrl, JSON.stringify(this.payload).length, this.selectedSymbol)
      const formatedFee = new Bignumber(fee.finalFee).dividedBy(new Bignumber(10).pow(fee.decimals)).toString()
      if (+this.balance >= +formatedFee) {
        // const reader = new FileReader();
        // const data = reader.result
        // await this.genPayload()
        let payload = this.datasetContent
        const ops = {
          tags: [
            // datsetName: '', 
            // datsetContent: '',
            // metadata: '',
            {name: "app_name",value: "vector_dataset"}, 
            {name: "uploader",value: window.ethereum.selectedAddress}, 
            {name: "uploader_type",value: "ethereum"},
            {name: "origin_dataset_name",value: this.datasetName},
            {name: "catalog",value: this.catalog},
            {name: "file_source",value: this.fileSource},
          ]
        }
        const res = await this.instance.sendAndPay(this.arseedUrl, payload, this.selectedSymbol, ops)
        console.log(res)

        // // ----------- for test bug----------------
        // const cfg =  {
        //   signer: this.instance.signer,
        //   path:"",
        //   arseedUrl: 'https://arseed.web3infra.dev',
        //   currency: 'AR'
        // }
        // const ords = await createAndSubmitItem(this.payload,ops,cfg)
        // console.log('oooood',ords)
        // // const pay = new Everpay({
        // //   account: this.instance.signer.address,
        // //   chainType: 'ethereum' as any,
        // //   ethConnectedSigner: this.instance.signer
        // // })
        // //
        // // const tx = await payOrder(pay,ords)
        // // console.log('tttxxx',tx)
        // // ----------------------------
        // this.submitResp = JSON.stringify(res)
        // this.getOrders()
      } else {
        alert(`need ${formatedFee} ${this.selectedSymbol} to upload`)
      }
    },
    async getOrders() {
      getOrders(this.arseedUrl, window.ethereum.selectedAddress).then(orders => {
        this.orders = orders
      })
    },
    intervalUpdateOrders () {
      setTimeout(() => {
        this.getOrders()
        this.intervalUpdateOrders()
      }, 10000)
    },
    async getBalances() {
      this.everpay.balances({
        account: window.ethereum.selectedAddress
      }).then(balances => {
        const balanceStack = {}
        balances.forEach(balanceItem => {
          balanceStack[balanceItem.symbol] = balanceItem.balance
        })
        this.balanceStack = balanceStack
      })
    },
    // async genPayload () {
    //   this.payload = 
    //   // const result = await axios.get(`https://api.github.com/gists/${this.gistId}`)
    //   // this.gistOwnerId = result.data.history[0].user.id.toString()
    //   // this.payload = Buffer.from(JSON.stringify(result.data))
    // },
    viewItem (url) {
      window.open(url, '_blank').focus()
    },
    copyTextToClipboard(text) {
      navigator.clipboard.writeText(text).then(
        () => {
          /* clipboard successfully set */
          this.$message({
            message:'Link copied',
            type: 'success'
          })
        },
        () => {
          /* clipboard write failed */
        }
      );
    },
  },
  mounted() {
    this.everpay = new Everpay()

    this.everpay.info().then(info => {
      this.symbols = info.tokenList.map(token => token.symbol)
      this.selectedSymbol = this.symbols[0]
    })

    this.pubId = pubsub.subscribe('connected',async (msgName,data)=>{
      this.connected = true
      this.instance = data
      this.getOrders()
      this.intervalUpdateOrders()
      this.getBalances()
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId)
  },
};
</script>

<style scoped>
.row {
  margin-top: 20px;
}

.order {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
}

.order .view {
  margin-left: 10px;
}
</style>