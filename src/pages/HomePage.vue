<template>
  <q-page class="layout--main q-pa-md">
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-8">
        <template v-if="!loadingPosts && posts.length">
          <q-card
            v-for="post in posts"
            :key="post.id"
            class="card-post q-mb-md"
            flat
            bordered
          >
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img
                    src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3960a733-7675-40e7-9127-098bfd2c5071/width=450/00150-2273163975.jpeg"
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ post.id }}</q-item-label>
                <q-item-label caption>{{ post.location }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-separator />
            <q-img :src="post.imageUrl" />
            <q-card-section>
              <div>{{ post.caption }}</div>
              <div class="text-caption text-grey">
                {{ formatDate(post.date) }}
              </div>
            </q-card-section>
          </q-card>
        </template>
        <template v-else-if="!loadingPosts && !posts.length">
          <h6 class="text-center text-grey">No posts yet.</h6>
        </template>
        <template v-else>
          <q-card flat bordered>
            <q-item>
              <q-item-section avatar>
                <q-skeleton type="QAvatar" animation="fade" size="40px" />
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  <q-skeleton type="text" animation="fade" />
                </q-item-label>
                <q-item-label caption>
                  <q-skeleton type="text" animation="fade" />
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-skeleton height="200px" square animation="fade" />

            <q-card-section>
              <q-skeleton type="text" class="text-subtitle2" animation="fade" />
              <q-skeleton
                type="text"
                width="50%"
                class="text-subtitle2"
                animation="fade"
              />
            </q-card-section>
          </q-card>
        </template>
      </div>
      <div class="col-4 large-screen-only">
        <q-item class="fixed">
          <q-item-section avatar>
            <q-avatar size="xl">
              <img
                src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3960a733-7675-40e7-9127-098bfd2c5071/width=450/00150-2273163975.jpeg"
              />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Sam Huang</q-item-label>
            <q-item-label caption>Taiwan</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<script setup>
import { ref } from "vue";
import { date, useQuasar } from "quasar";
import axios from "axios";

const $q = useQuasar();

const posts = ref([]);
const loadingPosts = ref(false);
const formatDate = (value) => date.formatDate(value, "MMMM DD HH:mmA");

const getPosts = () => {
  loadingPosts.value = true;
  axios
    .get(`${process.env.API}/posts`)
    .then((res) => {
      posts.value = res.data;
    })
    .catch((err) => {
      $q.dialog({
        title: "Error",
        message: `${err.message}! Could not connect to the server!`,
      });
    })
    .finally(() => {
      loadingPosts.value = false;
    });
};

getPosts();
</script>

<style lang="scss" scoped>
.card-post {
  .q-img {
    max-height: 600px;
    min-height: 200px;
  }
}
</style>
