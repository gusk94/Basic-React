import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { color, text, checked, id, onToggle, onRemove } = this.props;
        return (
            <div className="todoitem" onClick={() => onToggle(id) }>
                <div className="removeitem" onClick={(e) => {
                    // onToggle 실행 x , 이벤트의 확산을 막아줌 -> onRemove 함수가 부모 이벤트인 onToggle 까지 가지 않음
                    e.stopPropagation();
                    onRemove(id)}
                }>&times;</div>
                {/* 템플릿 리터럴 -> 유동적 설정 가능 */}
                <div style={{color}} className={`todotext ${checked && 'checked'}`}>
                    {text}
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        )
    }
}

export default TodoItem;