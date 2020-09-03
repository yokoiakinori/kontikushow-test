<template>
  <div class="pageMargin wrapper">
    <div class="illust"></div>
    <h2>ご質問などはこちらから</h2>
    <p>
      作品や商品、お仕事に関してのお問い合わせはこちらからお願いいたします。<br />
      お問い合わせ内容によってはお返事できかねる場合がありますので、あらかじめご了承ください。
    </p>
    <validation-observer
      ref="observer"
      v-slot="{ invalid, validated }"
      tag="form"
      name="contact"
      method="POST"
      netlify
      data-netlify-honeypot="bot-field"
      @submit.prevent="onSubmit"
    >
      <input type="hidden" name="form-name" value="contact" />
      <label for="username" class="first">
        <p>お名前*</p>
      </label>
      <validation-provider
        v-slot="{ errors }"
        rules="required|max:100"
        name="お名前"
      >
        <input type="text" name="userName" id="" v-model="username" />
        <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
      </validation-provider>
      <label for="useremail"><p>メールアドレス*</p> </label>
      <validation-provider
        v-slot="{ errors }"
        rules="required|email|max:256"
        name="メールアドレス"
      >
        <input type="text" name="useremail" id="" v-model="useremail" />
        <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
      </validation-provider>
      <label for=""
        ><p>件名</p>
        <input type="text" name="subject" id="" />
      </label>
      <label for=""
        ><p>メッセージ</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </label>
      <p class="note">*必須事項です。</p>
      <div class="p-contact__item" v-show="false">
        <label for="message">スパムでない場合は空欄</label>
        <input type="text" name="bot-field" v-model="botField" />
      </div>
      <div>
        <button type="submit" :disabled="invalid || !validated">送 信</button>
      </div>
    </validation-observer>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'CONTACT',
    }
  },
  data() {
    return {
      username: '',
      useremail: '',
      botField: '',
      isSubmit: false,
      isSending: false,
      isError: false,
      completeMessage: '',
    }
  },
  computed: {
    sendingClass() {
      return {
        'is-sending': this.isSending,
        'is-error': this.isError,
        'is-complete': this.isSubmit,
      }
    },
  },
  methods: {
    onSubmit() {
      if (this.isSending) {
        return
      }
      this.isSending = true
      this.completeMessage = '送信処理中…'
      const params = new URLSearchParams()
      params.append('form-name', 'contact')
      params.append('username', this.username)
      params.append('useremail', this.useremail)
      if (this.botField) {
        params.append('bot-field', this.botField)
      }
      this.$axios
        .$post('/', params)
        .then(() => {
          this.completeMessage = 'お問い合わせを送信しました！'
          this.resetForm()
          this.isSubmit = true
        })
        .catch(() => {
          this.completeMessage = 'お問い合わせの送信が失敗しました'
          this.isError = true
        })
        .finally(() => {
          this.isSending = false
        })
    },

    resetForm() {
      this.username = ''
      this.useremail = ''
      this.isError = false
      this.$refs.observer.reset()
    },
  },
}
</script>

<style lang="scss" scoped>
.illust {
  width: 100%;
  height: 300px;
  background-color: gray;
}
h2 {
  margin-top: 35px;
  margin-bottom: 25px;
}
.first {
  margin-top: 0 !important;
}
form {
  display: flex;
  flex-flow: column;
  margin-top: 25px;
  label {
    display: flex;
    flex-flow: column;
    margin-top: 15px;
  }
  input {
    height: 40px;
    @include inputForm;
  }
  textarea {
    @include inputForm;
    height: 180px;
  }
  div {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    button {
      width: 200px;
      height: 45px;
      font-size: 17px !important;
      font-family: 'Hiragino Sans' !important;
      font-weight: 600 !important;
      border-radius: 5px;
      background-color: white;
      color: $green;
      border: solid 1.5px $green;
      transition-duration: 0.3s;
      box-shadow: 3px 3px rgba($green, 0.3);
      &:hover {
        background-color: $green;
        color: white;
        transition-duration: 0.3s;
      }
    }
  }
}
.note {
  font-size: 13px !important;
  color: gray;
  margin-top: 5px;
}
</style>
