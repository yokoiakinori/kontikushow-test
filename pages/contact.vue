<template>
  <div class="pageMargin wrapper">
    <BreadcrumbTrail :breadcrumbs="breadcrumbs" />
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
        rules="required|max:30"
        name="お名前"
      >
        <input type="text" name="username" id="" v-model="username" />
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
      <label for="subject"><p>件名</p> </label>
      <validation-provider v-slot="{ errors }" rules="max:30" name="件名">
        <input type="text" name="subject" id="" v-model="subject" />
        <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
      </validation-provider>
      <label for="message"><p>メッセージ</p> </label>
      <validation-provider
        v-slot="{ errors }"
        rules="max:400"
        name="メッセージ"
      >
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          v-model="message"
        ></textarea>
        <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
      </validation-provider>
      <p class="note">*必須事項です。</p>
      <div class="p-contact__item" v-show="false">
        <label for="message">スパムでない場合は空欄</label>
        <input type="text" name="bot-field" v-model="botField" />
      </div>
      <div>
        <button
          type="submit"
          :disabled="invalid || !validated"
          class="shadebutton"
        >
          送 信
        </button>
      </div>
      <transition>
        <h2 class="sendingMessage" v-show="isSending">{{ completeMessage }}</h2>
      </transition>
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
      subject: '',
      message: '',
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
    breadcrumbs() {
      return {
        data: [{ name: 'TOP', path: '/' }, { name: 'CONTACT' }],
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
      const path = new URL(window.location)
      params.append('form-name', 'contact')
      params.append('username', this.username)
      params.append('useremail', this.useremail)
      params.append('subject', this.subject)
      params.append('message', this.message)
      if (this.botField) {
        params.append('bot-field', this.botField)
      }
      this.$axios
        .$post(path, params)
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
  height: 40vw;
  max-height: 300px;
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
    }
  }
}
.note {
  font-size: 13px !important;
  color: gray;
  margin-top: 5px;
}
</style>
