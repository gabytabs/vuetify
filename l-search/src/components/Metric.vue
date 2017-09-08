<template>
    <div>
        <div class="card">
            <div class="card-content">
                <p class="title has-text-centered">
                    {{ metric.metricRate }}
                </p>
                <p class="title">
                   {{ metric.metricName }}
                </p>
                <p class="subtitle">
                    {{ metric.industry }}
                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    <span> Source: <a :href="metric.sourceUrl" target="_blank">URL</a> </span>
                </p>
                <p class="card-footer-item">
                    <span> Platform: <span class="has-text-info">{{ metric.platform }}</span> </span>
                </p>
            </footer>
            <footer class="card-footer">
                <p class="card-footer-item">
                    Studied on: {{metric.sourceDateFrom}}
                </p>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        props: [ 'metric' ]
    }
</script>