export default {
    "extends": [
        "stylelint-config-standard"
    ],
    "plugins": [
        "stylelint-order"
    ],
    "rules": {
        "selector-class-pattern": [
            "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
            {
                "severity": "warning"
            }
        ],
        "order/properties-alphabetical-order": true
    }
}
